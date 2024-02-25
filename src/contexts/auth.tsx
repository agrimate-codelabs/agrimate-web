/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useContext, useEffect } from "react";
import api from "@/utils/api";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "react-hot-toast";
import Loading from "@/components/atom/loading";
import { useCookies } from "react-cookie";

interface AuthProps {
  email: string;
  password: string;
}

const AuthContext = createContext({}) as any;

export const AuthProvider = ({ children }: any) => {
  const router = useRouter();
  const pathname = usePathname();

  const [cookies, setCookie, removeCookie] = useCookies();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function refreshAccessToken() {
    try {
      const { data } = await api.post("auth/refresh-token");
      localStorage.setItem("accessToken", data.accessToken);
    } catch (error) {
      removeCookie("AGRIMATE_RT");
      localStorage.removeItem("accessToken");
      router.push("/auth/login");
      toast.error("Session Expired, Please Login Again");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }

  async function getUser() {
    try {
      const { data } = await api.get("auth/current-user");

      setUser(data);
      // router.push("/");
    } catch (error) {
      if (!pathname.includes("/signup")) {
        refreshAccessToken();
        try {
          const { data } = await api.get("auth/current-user");
          setUser(data);
        } catch (error) {
          removeCookie("AGRIMATE_RT");
          localStorage.removeItem("accessToken");
          router.push("/auth/login");
          toast.error("Session Expired, Please Login Again");
        }
      }
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }

  // First time check
  useEffect(() => {
    async function loadUserFromCookies() {
      const token = localStorage.getItem("accessToken");
      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        getUser();
      } else {
        if (pathname !== "/auth/signup" && pathname !== "/auth/verify") {
          router.push("/auth/login");
        }

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }
    loadUserFromCookies();
  }, []);

  // For login
  const login = async ({ email, password }: AuthProps) => {
    let data = await api
      .post("auth/signIn", { email, password })
      .catch((err) => {
        toast.error("Username atau Password Salah");
        return;
      });

    const token = data?.data.data;

    localStorage.setItem("accessToken", token.accessToken);
    setCookie("AGRIMATE_RT", token.refreshToken, {
      secure: true,
      sameSite: "none",
      path: "/",
    });

    api.defaults.headers.Authorization = `Bearer ${token.accessToken}`;
    const { data: user } = await api.get("auth/current-user");
    setUser(user);
    toast.success("Login Success");
    router.push("/");
  };

  // For logout
  const logout = () => {
    removeCookie("AGRIMATE_RT");
    setUser(null);
    delete api.defaults.headers.Authorization;
    router.push("/auth/login");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        login,
        logout,
        loading,
      }}
    >
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext) as any;

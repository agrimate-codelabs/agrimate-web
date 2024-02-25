import React, { useState } from "react";
import Input from "@/components/molecules/Input";
import Button from "@/components/molecules/button";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/contexts/auth";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState<string>("offtaker@dev.com");
  const [password, setPassword] = useState<string>("12345678");

  const onSubmit = async () => {
    await login({ email, password });
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-col sm:flex-row items-center lg:items-start sm:justify-center lg:justify-start flex-auto min-w-0 gap-36 lg:pr-36">
        <div
          className="h-full hidden lg:flex flex-auto p-20 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url(/banner-login.png)",
          }}
        >
          <div className="z-10 flex flex-col ">
            <Image
              className="self-center mb-20"
              src="/logoSidebar.svg"
              width={250}
              height={56}
              alt={""}
            />
            <div className="sm:text-3xl xl:text-4xl font-bold leading-tight mb-6">
              Selamat Datang!
            </div>
            <p className="sm:text-sm xl:text-lg text-stone-300/80 text-base font-medium mt-4 pr-14 leading-loose">
              Anda dapat dengan mudah mengintegrasikan, memantau, dan
              mengoptimalkan pasokan pertanian untuk keberlanjutan bisnis yang
              lebih baik.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center align-middle h-full ">
          <div className="p-5 bg-white rounded-lg shadow-md w-96">
            <Input
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-sm my-3 flex justify-end">
              <a
                href="#"
                className="text-green/100 font-semibold hover:text-green/500"
              >
                Lupa password?
              </a>
            </div>
            <div>
              <Button onClick={() => onSubmit()}>Masuk</Button>
            </div>
            <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
              <span>
                Belum Punya akun?{" "}
                <Link
                  href="/auth/signup"
                  className="text-green/100 font-semibold hover:text-green/500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                >
                  Daftar Disini
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

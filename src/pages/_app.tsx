import Navbar from "@/components/atom/navbar";
import Sidebar from "@/components/atom/sidebar";
import { AuthProvider } from "@/contexts/auth";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";
import { usePathname } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { NextUIProvider } from "@nextui-org/react";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const link = usePathname();

  const isAuth = link.includes("/auth");

  return (
    <NextUIProvider>
      <main
        className={`${font.className} flex flex-row bg-whitebg min-h-screen `}
      >
        <Head>
          <title>Agrimate</title>
          <meta
            name="description"
            content="AgriMate is a platform that helps farmers to sell their products directly to the customers."
          />
          <link rel="icon" href="/logo.svg" />
        </Head>
        <Toaster position="top-center" reverseOrder={false} />
        <NextTopLoader
          color="#ffcd00"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <AuthProvider>
          {isAuth ? null : <Sidebar />}
          <div
            className={`flex flex-col w-full text-black/text ${
              isAuth ? "" : "px-[25px] py-[40px]"
            }`}
          >
            {isAuth ? null : <Navbar />}
            <Component {...pageProps} />
          </div>
        </AuthProvider>
      </main>
    </NextUIProvider>
  );
}

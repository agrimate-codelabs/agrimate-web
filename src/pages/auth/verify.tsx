/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Image from "next/image";
import Button from "@/components/molecules/button";
import Link from "next/link";
import api from "@/utils/api";
import { useRouter } from "next/router";

const Verify = () => {
  const router = useRouter();

  const sendVerify = async () => {
    try {
      const { data } = await api.post("/auth/verify", {
        token: router.query.token,
        userId: router.query.userId,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    sendVerify();
  }, []);

  return (
    <div className="w-full h-screen flex-col justify-center items-center gap-2.5 inline-flex bg-green/500 ">
      <div className=" self-center w-4/6 h-max flex-col justify-start items-middle flex shadow-xl rounded-md border border-green/500 ">
        <div className=" self-stretch p-4 bg-teal-950 border-b border-teal-800 justify-start items-center gap-4 inline-flex">
          <div className="ColumnForContentElements grow shrink basis-0 flex-col justify-center items-start gap-2 inline-flex">
            <div className="Text self-stretch text-white text-base font-bold leading-tight">
              Email Verifikasi
            </div>
          </div>
          <div className="ColumnForContentElements grow shrink basis-0 flex-col justify-center items-end gap-2 inline-flex">
            <Image
              src="/logo-agrimate.svg"
              alt="Agrimate Logo"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div
          className="self-stretch p-8 justify-start items-center gap-4 inline-flex"
          style={{
            backgroundImage: "url(/bg-verif.png)",
          }}
        >
          <div className=" grow shrink basis-0 flex-col justify-center items-center gap-2 inline-flex">
            <div className=" self-stretch text-white text-[28px] font-bold leading-loose">
              Terima kasih telah mendaftar!{" "}
            </div>
            <div className=" self-stretch text-stone-300 text-base font-normal leading-normal">
              Akun anda berhasil diverifikasi. Silahkan login untuk melanjutkan
              ke dashboard.
            </div>
            <div className="mt-2 w-36">
              <Link href="/auth/login">
                <Button>Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;

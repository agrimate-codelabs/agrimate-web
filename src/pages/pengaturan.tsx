import Button from "@/components/molecules/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Image, Input, Textarea } from "@nextui-org/react";
import React from "react";

const pengaturan = () => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mt-5 shadow-lg rounded-md">
      <div className="px-4 py-5 flex-auto">
        <Image
          width={300}
          alt="NextUI hero Image"
          src="https://img.lovepik.com/photo/45005/5118.jpg_wh860.jpg"
        />
      </div>
      <div className="flex flex-col gap-4 p-5">
        <Input
          label="Nama Perusahaan"
          placeholder="Masukkan nama"
          defaultValue="PT. Nusantara Sejahtera"
          className="w-full"
          labelPlacement="outside"
          required
        />
        <Input
          label="Nomor Perusahaan"
          placeholder="Masukkan nomor"
          defaultValue="1234567890"
          className="w-full"
          labelPlacement="outside"
          required
        />
        <Textarea
          label="Profile Perusahaan"
          placeholder="Masukkan deskripsi"
          defaultValue="PT Agrikultur Jaya merupakan perusahaan yang memiliki fokus pada produksi dan pemasaran produk-produk pertanian, seperti tanaman pangan, sayuran, buah-buahan, daging, susu, telur, dan ikan. Dengan pemodalan dan sistem bagi hasil sehingga petani tidak memerlukan modal awal untuk bertani."
          className="w-full"
          labelPlacement="outside"
          required
        />
        <Input
          label="Lokasi"
          placeholder="Masukkan alamat"
          defaultValue="Jl. Gatot Subroto, No.144 RT.10, RW.01, Kec. Bayongbong Kel. Kiaracondong, Bandung, Jawa Barat, 40222"
          className="w-full"
          labelPlacement="outside"
          required
          endContent={
            <div className="pointer-events-none flex items-center">
              <Icon icon="akar-icons:location" className="text-default-400" />
            </div>
          }
        />
        <Image
          width={300}
          alt="NextUI hero Image"
          src="https://as2.ftcdn.net/v2/jpg/03/16/86/97/1000_F_316869736_gpSoarAK7vumAj9aDj0vAE9LSMfd3dnZ.jpg"
        />
        <Input
          type="number"
          label="Bagi Hasil"
          placeholder="0.00"
          labelPlacement="outside"
          defaultValue="5"
          className="text-green-text"
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">%</span>
            </div>
          }
        />
        <Button size={"md"} className="w-28 ml-auto">
          Simpan
        </Button>
      </div>
    </div>
  );
};

export default pengaturan;

import React, { use, useEffect, useState } from "react";
import Input from "@/components/molecules/Input";
import Button from "@/components/molecules/button";
import Image from "next/image";
import Stepper from "@/components/molecules/stepper";
import TextArea from "@/components/molecules/textArea";
import Link from "next/link";
import Selects from "@/components/molecules/select";
import api from "@/utils/api";
import Loading from "@/components/atom/loading";
import { Rings } from "react-loader-spinner";
import useLocation from "@/hooks/useLocation";

const Register = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    nib: "",
    companyName: "",
    phone: "",
    provinceId: "",
    cityId: "",
    districtId: "",
    villageId: "",
    address: "",
  });

  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (
      (form.email && form.password && form.confirmPassword && form.name) ||
      (form.nib &&
        form.companyName &&
        form.phone &&
        form.provinceId &&
        form.cityId &&
        form.districtId &&
        form.villageId &&
        form.address)
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [form]);

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
            <p className="sm:text-sm xl:text-md text-stone-300/80 text-base font-medium mt-4 pr-14 leading-loose">
              Anda dapat dengan mudah mengintegrasikan, memantau, dan
              mengoptimalkan pasokan pertanian untuk keberlanjutan bisnis yang
              lebih baik.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center py-14 align-middle h-full ">
          <Stepper step={step} />
          {step == 1 ? (
            <Form1
              setStep={setStep}
              form={form}
              setForm={setForm}
              disable={disable}
              setDisable={setDisable}
            />
          ) : step == 2 ? (
            <Form2 setStep={setStep} form={form} setForm={setForm} />
          ) : (
            <Form3 />
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;

const Form1 = ({ setStep, form, setForm, disable, setDisable }: any) => {
  return (
    <div className="p-5 bg-white rounded-lg shadow-md w-96 mt-5">
      <Input
        label="Nama Pengaju"
        value={form.name}
        placeholder="contoh: Bambang Sutrisno"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <Input
        label="Email"
        value={form.email}
        placeholder="contoh: bambang@gmail.com"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <Input
        label="No HP"
        value={form.phone}
        type="number"
        placeholder="contoh: 08XXXXX"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <Input
        label="Password"
        type="password"
        value={form.password}
        placeholder="********"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <Input
        label="Konfirmasi Password"
        type="password"
        placeholder="********"
        value={form.confirmPassword}
        onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
      />
      <div className="mt-3">
        <Button
          onClick={() => {
            setStep(2);
            setDisable(true);
          }}
          disabled={disable}
        >
          Selanjutnya
        </Button>
      </div>
      <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
        <span>
          Sudah Punya akun?{" "}
          <Link
            href="/auth/login"
            className="text-green/100 font-semibold hover:text-green/500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
          >
            Masuk Disini
          </Link>
        </span>
      </p>
    </div>
  );
};

const Form2 = ({ setStep, form, setForm, disable }: any) => {
  const {
    provinceDump,
    cityDump,
    districtDump,
    villageDump,
    province,
    city,
    district,
    village,
    setProvince,
    setCity,
    setDistrict,
    setVillage,
    loading,
  } = useLocation();

  const onChangeProvince = (e: any) => {
    setProvince(e);
    setForm({ ...form, provinceId: e.value });
  };

  const onChangeCity = (e: any) => {
    setCity(e);
    setForm({ ...form, cityId: e.value });
  };

  const onChangeDistrict = (e: any) => {
    setDistrict(e);
    setForm({ ...form, districtId: e.value });
  };

  const onChangeVillage = (e: any) => {
    setVillage(e);
    setForm({ ...form, villageId: e.value });
  };

  return (
    <div className="p-5 bg-white rounded-lg shadow-md w-96 mt-5">
      <Input
        label="Nama PT"
        placeholder="contoh: PT. Agrijaya Karya Abadi"
        value={form.companyName}
        onChange={(e) => setForm({ ...form, companyName: e.target.value })}
      />
      {/* <Input
        label="Nomor Induk Berusaha (NIB)"
        placeholder="2000239922"
        value={form.nib}
        onChange={(e) => setForm({ ...form, nib: e.target.value })}
      /> */}
      <Selects
        label="Provinsi"
        option={provinceDump}
        onChange={onChangeProvince}
        value={province}
        placeholder="-- Pilih Provinsi --"
      />
      <Selects
        label="Kota"
        option={cityDump}
        onChange={onChangeCity}
        value={city}
        placeholder="-- Pilih Kota --"
      />
      <Selects
        label="Provinsi"
        option={provinceDump}
        onChange={onChangeProvince}
        value={province}
        placeholder="-- Pilih Provinsi --"
      />
      <Selects
        label="Kecamatan"
        option={districtDump}
        onChange={onChangeDistrict}
        value={district}
        placeholder="-- Pilih Kecamatan --"
      />
      <Selects
        label="Kelurahan"
        option={villageDump}
        onChange={onChangeVillage}
        value={village}
        placeholder="-- Pilih Kelurahan --"
      />
      <TextArea
        label="Alamat"
        placeholder="contoh: Jl. Raya Bogor KM 30"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />
      <div className="mt-3 flex flex-row gap-2">
        <Button onClick={() => setStep(1)} style="secondary">
          Sebelumnya
        </Button>
        <Button
          onClick={() => {
            setStep(3);
            console.log(form);
          }}
          disabled={disable}
        >
          Selanjutnya
        </Button>
      </div>
      <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
        <span>
          Sudah Punya akun?{" "}
          <Link
            href="/auth/login"
            className="text-green/100 font-semibold hover:text-green/500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
          >
            Masuk Disini
          </Link>
        </span>
      </p>
    </div>
  );
};

const Form3 = () => {
  return (
    <div className="p-5 bg-white rounded-xl shadow-md w-96 mt-5">
      <div className=" flex-col justify-start items-center gap-5 flex">
        <div className=" w-[97px] h-[97px] relative">
          <Image src="/verifemail.svg" width={97} height={97} alt={""} />
        </div>
        <div className=" w-[277px] text-center">
          <span className="text-neutral-800 text-base font-medium leading-normal">
            Silahkan verifikasi email yang telah dikirimkan ke
          </span>
          <span className="text-neutral-800 text-base font-semibold leading-normal">
            {" "}
          </span>
          <span className="text-neutral-800 text-base font-bold leading-normal">
            m.johndoe@gmail.com{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

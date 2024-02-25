import React, { useEffect, useState } from "react";
import Tabs from "@/components/atom/tabsTransaction";

import "rsuite-table/dist/css/rsuite-table.css";
import FilterButton from "@/components/molecules/filterButton";
import Button from "@/components/molecules/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button as NextButton,
  Input,
  Select,
  useDisclosure,
  SelectItem,
} from "@nextui-org/react";

export default function Transaksi() {
  const [search, setSearch] = useState("");
  const [openTab, setOpenTab] = React.useState("Pengajuan Modal");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [namaPetani, setNamaPetani] = useState("");
  const [JumlahModal, setJumlahModal] = useState(0);
  const [JumlahPanen, setJumlahPanen] = useState(0);
  const [bagiHasil, setBagiHasil] = useState(2500000);
  const [status, setStatus] = useState("");

  const statusOptions = [
    {
      label: "Sudah Ditransfer",
      value: "Sudah Ditransfer",
      description: "Pembayaran sudah dilakukan",
    },
    {
      label: "Perlu Ditransfer",
      value: "Perlu Ditransfer",
      description: "Pembayaran belum dilakukan",
    },
  ];

  const namaPetaniOptions = [
    {
      label: "Petani 1",
      value: "Petani 1",
    },
    {
      label: "Petani 2",
      value: "Petani 2",
    },
  ];

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <>
      <Tabs search={search} openTab={openTab} setOpenTab={setOpenTab}>
        <div className="flex flex-row gap-2 mb-1 items-center my-4 justify-between px-3">
          <FilterButton search={search} setSearch={setSearch} />
          {openTab === "Bagi Hasil" && (
            <Button size="md" onClick={onOpen}>
              Tambah Data
            </Button>
          )}
        </div>
      </Tabs>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className=" text-gray-900"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Tambah Data
              </ModalHeader>
              <ModalBody>
                <Select
                  label="Nama Petani"
                  placeholder="Pilih Nama Petani"
                  labelPlacement="outside"
                >
                  {namaPetaniOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="text-gray-900"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </Select>
                <Input
                  type="number"
                  label="Jumlah Pemodalan"
                  placeholder="0.00"
                  labelPlacement="outside"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">Rp</span>
                    </div>
                  }
                />
                <Input
                  type="number"
                  label="Jumlah Pendapatan Panen"
                  placeholder="0.00"
                  labelPlacement="outside"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">Rp</span>
                    </div>
                  }
                />
                <Input
                  type="number"
                  label="Bagi Hasil"
                  placeholder="0.00"
                  labelPlacement="outside"
                  defaultValue={bagiHasil as any}
                  className="text-green-text"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">Rp</span>
                    </div>
                  }
                />
                <Select
                  label="Status"
                  placeholder="Pilih Status"
                  labelPlacement="outside"
                >
                  {statusOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="text-gray-900"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </Select>
              </ModalBody>
              <ModalFooter>
                <NextButton color="danger" variant="light" onClick={onClose}>
                  Hapus Data
                </NextButton>
                <Button onClick={onClose} size={"sm"}>
                  Simpan
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

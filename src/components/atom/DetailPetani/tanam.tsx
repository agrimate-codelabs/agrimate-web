import React from "react";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import { Icon } from "@iconify/react/dist/iconify.js";
import { dataAktivLainnya, dataAktivTanam } from "../helper";
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
  Image,
} from "@nextui-org/react";
import Label from "@/components/molecules/label";

const TableTanam = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Table
        data={dataAktivTanam}
        autoHeight
        headerHeight={50}
        rowHeight={50}
        rowClassName="text-slate-800 text-sm font-normal py-1 border-b-2 border-gray-100"
      >
        <Column width={60}>
          <HeaderCell className="text-teal-600 text-base font-semibold">
            No
          </HeaderCell>
          <Cell dataKey="no" />
        </Column>

        <Column width={240}>
          <HeaderCell className="text-teal-600 text-base font-semibold">
            Tanggal Tanam
          </HeaderCell>
          <Cell>
            {(rowData, rowIndex) => {
              rowData.tanggal_tanam = new Date(
                rowData.tanggal_tanam
              ).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });
              return <span tabIndex={rowIndex}>{rowData.tanggal_tanam}</span>;
            }}
          </Cell>
        </Column>

        <Column width={220}>
          <HeaderCell className="text-teal-600 text-base font-semibold">
            Luas Tanam
          </HeaderCell>
          <Cell>
            {(rowData, rowIndex) => {
              return (
                <span tabIndex={rowIndex}>{rowData.luas_tanam} Meter</span>
              );
            }}
          </Cell>
        </Column>

        <Column width={240}>
          <HeaderCell className="text-teal-600 text-base font-semibold">
            Komoditas
          </HeaderCell>
          <Cell>
            {(rowData, rowIndex) => {
              return <span tabIndex={rowIndex}>{rowData.komoditas}</span>;
            }}
          </Cell>
        </Column>

        <Column width={200}>
          <HeaderCell className="text-teal-600 text-base font-semibold">
            Status
          </HeaderCell>
          <Cell>
            {(rowData, rowIndex) => {
              return <Label text={rowData.status} />;
            }}
          </Cell>
        </Column>

        <Column width={50}>
          <HeaderCell className="text-teal-600 text-base font-semibold">
            Aksi
          </HeaderCell>
          <Cell align="center">
            <button onClick={onOpen}>
              <Icon
                icon="ic:baseline-remove-red-eye"
                color="grey"
                fontSize={24}
              />
            </button>
          </Cell>
        </Column>
      </Table>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior={"inside"}
        className=" text-gray-900"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Data Tanam
              </ModalHeader>
              <ModalBody>
                <span className=" text-sm">Map</span>
                <Image
                  className="w-full ml-10"
                  width={300}
                  alt="NextUI hero Image"
                  src="https://as2.ftcdn.net/v2/jpg/03/16/86/97/1000_F_316869736_gpSoarAK7vumAj9aDj0vAE9LSMfd3dnZ.jpg"
                />
                <Input
                  label="Lokasi"
                  placeholder="Masukkan alamat"
                  defaultValue="Jl. Gatot Subroto, No.144 "
                  className="w-full"
                  labelPlacement="outside"
                  disabled
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <Icon
                        icon="akar-icons:location"
                        className="text-default-400"
                      />
                    </div>
                  }
                />
                <Input
                  label="Komoditas"
                  defaultValue="Bawang Putih"
                  className="w-full"
                  labelPlacement="outside"
                  disabled
                />
                <Input
                  label="Jenis Tanam"
                  defaultValue="Bawang Putih"
                  className="w-full"
                  labelPlacement="outside"
                  disabled
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
                      <span className="text-default-400 text-small">
                        Hektare
                      </span>
                    </div>
                  }
                />
                <Input
                  label="Tanggal Tanam"
                  placeholder="0.00"
                  labelPlacement="outside"
                  defaultValue="01/04/2023"
                  className="text-green-text"
                />
                <Input
                  label="Status"
                  placeholder="Pilih Status"
                  labelPlacement="outside"
                  defaultValue="Belum Panen"
                  disabled
                />
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default TableTanam;

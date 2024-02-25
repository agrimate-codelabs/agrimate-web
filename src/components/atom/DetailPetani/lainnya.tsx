import React from "react";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import { Icon } from "@iconify/react/dist/iconify.js";
import { dataAktivLainnya } from "../helper";

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
import Button from "@/components/molecules/button";

const TableLainnya = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Table
        data={dataAktivLainnya}
        autoHeight
        headerHeight={50}
        rowHeight={50}
        rowClassName="text-slate-800 text-sm font-normal py-1 border-b-2 border-gray-100"
      >
        <Column width={120}>
          <HeaderCell className="text-teal-600 text-base font-semibold">
            No
          </HeaderCell>
          <Cell dataKey="no" />
        </Column>

        <Column width={280}>
          <HeaderCell className="text-teal-600 text-base font-semibold">
            Jenis Aktivitas
          </HeaderCell>
          <Cell dataKey="jenis_aktivitas" />
        </Column>

        <Column width={280}>
          <HeaderCell className="text-teal-600 text-base font-semibold">
            Tanggal Aktifitas
          </HeaderCell>
          <Cell>
            {(rowData, rowIndex) => {
              rowData.tanggal_aktivitas = new Date(
                rowData.tanggal_aktivitas
              ).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });
              return (
                <span tabIndex={rowIndex}>{rowData.tanggal_aktivitas}</span>
              );
            }}
          </Cell>
        </Column>

        <Column width={240}>
          <HeaderCell className="text-teal-600 text-base font-semibold">
            Pukul
          </HeaderCell>
          <Cell>
            {(rowData, rowIndex) => {
              return <span tabIndex={rowIndex}>{rowData.pukul}</span>;
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
                Detail Aktivitas
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Jenis Aktivitas"
                  defaultValue="Pemberian Pupuk"
                  className="w-full"
                  labelPlacement="outside"
                  disabled
                />
                <Input
                  label="Tanggal Aktivitas"
                  placeholder="0.00"
                  labelPlacement="outside"
                  defaultValue="01/04/2023"
                  className="text-green-text"
                />
                <Input
                  label="Pukul"
                  placeholder="0.00"
                  labelPlacement="outside"
                  defaultValue="08:00"
                  className="text-green-text"
                />
                <span className=" text-sm">Gambar Aktivitas</span>
                <Image
                  className="max-w-full"
                  alt="NextUI hero Image"
                  src="https://images.pexels.com/photos/2804327/pexels-photo-2804327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <Input
                  label="Jenis Pupuk"
                  defaultValue="Urea"
                  className="w-full"
                  labelPlacement="outside"
                  disabled
                />
                <Input
                  type="number"
                  label="Natrium"
                  placeholder="0.00"
                  labelPlacement="outside"
                  defaultValue="5"
                  className="text-green-text"
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">N</span>
                    </div>
                  }
                />
                <Input
                  type="number"
                  label="Forfor"
                  placeholder="0.00"
                  labelPlacement="outside"
                  defaultValue="5"
                  className="text-green-text"
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">P</span>
                    </div>
                  }
                />
                <Input
                  type="number"
                  label="Kalium"
                  placeholder="0.00"
                  labelPlacement="outside"
                  defaultValue="5"
                  className="text-green-text"
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">Kl</span>
                    </div>
                  }
                />
              </ModalBody>
              <ModalFooter>
                {/* <Button size={"md"} className="w-28 ml-auto" onClick={onClose}>
                  Simpan
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default TableLainnya;

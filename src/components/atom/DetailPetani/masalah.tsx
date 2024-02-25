import React from "react";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import { Icon } from "@iconify/react/dist/iconify.js";
import { dataAktivLainnya, dataAktivMasalah } from "../helper";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  useDisclosure,
  Image,
  Select,
  SelectItem,
} from "@nextui-org/react";
import Label from "@/components/molecules/label";
import Button from "@/components/molecules/button";

const TableMasalah = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Table
        data={dataAktivMasalah}
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
            Jenis Permasalahan
          </HeaderCell>
          <Cell dataKey="jenis_masalah" />
        </Column>

        <Column width={280}>
          <HeaderCell className="text-teal-600 text-base font-semibold">
            Tanggal Pelaporan
          </HeaderCell>
          <Cell>
            {(rowData, rowIndex) => {
              rowData.tanggal_laporan = new Date(
                rowData.tanggal_laporan
              ).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });
              return <span tabIndex={rowIndex}>{rowData.tanggal_laporan}</span>;
            }}
          </Cell>
        </Column>

        <Column width={240}>
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
                Review Laporan Masalah
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Jenis Permasalahn"
                  defaultValue="Hama"
                  className="w-full"
                  labelPlacement="outside"
                  disabled
                />
                <Input
                  label="Tanggal"
                  placeholder="0.00"
                  labelPlacement="outside"
                  defaultValue="01/04/2023"
                  className="text-green-text"
                />
                <span className=" text-sm">Bukti Gambar</span>
                <Image
                  className="max-w-full"
                  alt="NextUI hero Image"
                  src="https://images.pexels.com/photos/13541362/pexels-photo-13541362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <Select
                  label="Status"
                  placeholder="Pilih Status"
                  labelPlacement="outside"
                  className="text-gray-900"
                >
                  <SelectItem
                    key={1}
                    value="Belum Direview"
                    className="text-gray-900"
                  >
                    Belum Direview
                  </SelectItem>
                  <SelectItem
                    key={2}
                    value="Diverifikasi"
                    className="text-gray-900"
                  >
                    Diverifikasi
                  </SelectItem>
                </Select>
              </ModalBody>
              <ModalFooter>
                <Button size={"md"} className="w-28 ml-auto" onClick={onClose}>
                  Simpan
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default TableMasalah;

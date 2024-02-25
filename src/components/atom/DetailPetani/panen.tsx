import React from "react";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import { Icon } from "@iconify/react/dist/iconify.js";
import { dataAktivLainnya } from "../helper";
import Link from "next/link";

const TablePanen = () => {
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
            <Link href="/aktivitas-tani/detail">
              <Icon
                icon="ic:baseline-remove-red-eye"
                color="grey"
                fontSize={24}
              />
            </Link>
          </Cell>
        </Column>
      </Table>
    </>
  );
};

export default TablePanen;

import React, { useEffect, useState } from "react";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/dist/css/rsuite-table.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import { dataAktivTan } from "@/components/atom/helper";
import FilterButton from "@/components/molecules/filterButton";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Link from "next/link";

export default function AktifitasTani() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem>Beranda</BreadcrumbItem>
        <BreadcrumbItem color={"primary"} className=" font-medium">
          Mohammad Asep Sopandi
        </BreadcrumbItem>
      </Breadcrumbs>

      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mt-5 shadow-lg rounded-md">
        <FilterButton
          search={search}
          setSearch={setSearch}
          className="px-4 py-2 mt-2"
        />
        <div className="px-4 flex-auto">
          <Table
            data={dataAktivTan}
            autoHeight
            headerHeight={50}
            rowHeight={50}
            rowClassName="text-slate-800 text-sm font-normal py-1 border-b-2 border-gray-100"
            // loading
          >
            <Column width={60}>
              <HeaderCell className="text-teal-600 text-base font-semibold">
                No
              </HeaderCell>
              <Cell dataKey="no" />
            </Column>

            <Column width={260} resizable>
              <HeaderCell className="text-teal-600 text-base font-semibold">
                Nama Lahan
              </HeaderCell>
              <Cell dataKey="nama_lahan" />
            </Column>

            <Column width={220}>
              <HeaderCell className="text-teal-600 text-base font-semibold">
                Luas Lahan
              </HeaderCell>
              <Cell>
                {(rowData, rowIndex) => {
                  return (
                    <span tabIndex={rowIndex}>
                      {rowData.luas_lahan} Hektare
                    </span>
                  );
                }}
              </Cell>
            </Column>

            <Column width={200}>
              <HeaderCell className="text-teal-600 text-base font-semibold">
                Kecamatan
              </HeaderCell>
              <Cell>
                {(rowData, rowIndex) => {
                  return <span tabIndex={rowIndex}>{rowData.kecamatan}</span>;
                }}
              </Cell>
            </Column>

            <Column width={240}>
              <HeaderCell className="text-teal-600 text-base font-semibold">
                Aktivitas Terakhir
              </HeaderCell>
              <Cell>
                {(rowData, rowIndex) => {
                  rowData.aktivitas_terakhir = new Date(
                    rowData.aktivitas_terakhir
                  ).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  });
                  return (
                    <span tabIndex={rowIndex}>
                      {rowData.aktivitas_terakhir}
                    </span>
                  );
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
        </div>
      </div>
    </>
  );
}

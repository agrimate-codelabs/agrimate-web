import React, { useEffect } from "react";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import Label from "@/components/molecules/label";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  dataList as data,
  dataList2 as data2,
  dataAktivLainnya,
  dataAktivMasalah,
  dataAktivPanen,
  dataAktivTanam,
} from "./helper";
import { Tab, Tabs } from "@nextui-org/react";
import TableLainnya from "./DetailPetani/lainnya";
import TableMasalah from "./DetailPetani/masalah";
import TableTanam from "./DetailPetani/tanam";

const TabsDetailPetani = ({
  children,
  search,
  openTab,
  setOpenTab,
}: {
  children: React.ReactNode;
  search: string;
  openTab: string;
  setOpenTab: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [dataList, setDataList] = React.useState(data);
  const [dataList2, setDataList2] = React.useState(data2);

  useEffect(() => {
    const filterData = data.filter((item: any) => {
      return item.nama_petani.toLowerCase().includes(search.toLowerCase());
    });
    const filterData2 = data2.filter((item: any) => {
      return item.nama_petani.toLowerCase().includes(search.toLowerCase());
    });
    setDataList(filterData);
    setDataList2(filterData2);
  }, [dataList, search]);

  return (
    <>
      <div className="flex flex-wrap">
        <Tabs
          variant={"underlined"}
          aria-label="Tabs variants"
          color={"primary"}
          size="lg"
          className="font-semibold mb-3 -ml-3 mt-2"
          onSelectionChange={(e) => setOpenTab(e as any)}
        >
          <Tab key="Tanam" title="Tanam" />
          <Tab key="Panen" title="Panen" />
          <Tab key="Aktivitas Lainnya" title="Aktivitas Lainnya" />
          <Tab key="Laporan Masalah" title="Laporan Masalah" />
        </Tabs>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-md">
          <div className=" flex-auto">
            {children}

            <div className="tab-content tab-space px-3">
              {/* Table Tanam */}
              <div
                className={openTab === "Tanam" ? "block" : "hidden"}
                id="link1"
              >
                <TableTanam />
              </div>
              {/* Table Panen */}
              <div
                className={openTab === "Panen" ? "block" : "hidden"}
                id="link2"
              >
                <Table
                  data={dataAktivPanen}
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
                        return (
                          <span tabIndex={rowIndex}>
                            {rowData.tanggal_tanam}
                          </span>
                        );
                      }}
                    </Cell>
                  </Column>

                  <Column width={240}>
                    <HeaderCell className="text-teal-600 text-base font-semibold">
                      Tanggal Panen
                    </HeaderCell>
                    <Cell>
                      {(rowData, rowIndex) => {
                        rowData.tanggal_panen = new Date(
                          rowData.tanggal_panen
                        ).toLocaleDateString("id-ID", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        });
                        return (
                          <span tabIndex={rowIndex}>
                            {rowData.tanggal_panen}
                          </span>
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
                        return (
                          <span tabIndex={rowIndex}>{rowData.komoditas}</span>
                        );
                      }}
                    </Cell>
                  </Column>

                  <Column width={240}>
                    <HeaderCell className="text-teal-600 text-base font-semibold">
                      Jumlah Panen
                    </HeaderCell>
                    <Cell>
                      {(rowData, rowIndex) => {
                        return (
                          <span tabIndex={rowIndex}>
                            {rowData.jumlah_panen}kg
                          </span>
                        );
                      }}
                    </Cell>
                  </Column>
                </Table>
              </div>
              {/* Table Aktivitas Lainnya */}
              <div
                className={openTab === "Aktivitas Lainnya" ? "block" : "hidden"}
                id="link2"
              >
                <TableLainnya />
              </div>
              {/* Table Laporan Masalah */}
              <div
                className={openTab === "Laporan Masalah" ? "block" : "hidden"}
                id="link2"
              >
                <TableMasalah />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabsDetailPetani;

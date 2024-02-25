import React, { useEffect } from "react";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import Label from "@/components/molecules/label";
import { Icon } from "@iconify/react/dist/iconify.js";
import { dataList as data, dataList2 as data2 } from "./helper";
import { Tab, Tabs as Tabbs } from "@nextui-org/react";

const Tabs = ({
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
        <Tabbs
          variant={"underlined"}
          aria-label="Tabs variants"
          color={"primary"}
          size="lg"
          className="font-semibold mb-3 -ml-3"
          onSelectionChange={(e) => setOpenTab(e as any)}
        >
          <Tab key="Pengajuan Modal" title="Pengajuan Modal" />
          <Tab key="Bagi Hasil" title="Bagi Hasil" />
        </Tabbs>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-md">
          <div className=" flex-auto">
            {children}

            <div className="tab-content tab-space px-3">
              <div
                className={openTab === "Pengajuan Modal" ? "block" : "hidden"}
                id="link1"
              >
                <Table
                  data={dataList}
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

                  <Column width={220} resizable>
                    <HeaderCell className="text-teal-600 text-base font-semibold">
                      Nama Petani
                    </HeaderCell>
                    <Cell dataKey="nama_petani" />
                  </Column>

                  <Column width={260} resizable>
                    <HeaderCell className="text-teal-600 text-base font-semibold">
                      Tanggal Pengajuan
                    </HeaderCell>
                    <Cell>
                      {(rowData, rowIndex) => {
                        rowData.tanggal_pengajuan = new Date(
                          rowData.tanggal_pengajuan
                        ).toLocaleDateString("id-ID", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        });

                        return (
                          <span tabIndex={rowIndex}>
                            {rowData.tanggal_pengajuan}
                          </span>
                        );
                      }}
                    </Cell>
                  </Column>

                  <Column width={220}>
                    <HeaderCell className="text-teal-600 text-base font-semibold">
                      Total
                    </HeaderCell>
                    <Cell>
                      {(rowData, rowIndex) => {
                        rowData.total = rowData.total.toLocaleString("id-ID");
                        return (
                          <span tabIndex={rowIndex}>Rp. {rowData.total}</span>
                        );
                      }}
                    </Cell>
                  </Column>

                  <Column width={200} resizable>
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
                      <Icon
                        icon="ic:baseline-remove-red-eye"
                        color="grey"
                        fontSize={24}
                      />
                    </Cell>
                  </Column>
                </Table>
              </div>
              <div
                className={openTab === "Bagi Hasil" ? "block" : "hidden"}
                id="link2"
              >
                <Table
                  data={dataList2}
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

                  <Column width={200} resizable>
                    <HeaderCell className="text-teal-600 text-base font-semibold">
                      Nama Petani
                    </HeaderCell>
                    <Cell dataKey="nama_petani" />
                  </Column>

                  <Column width={200} resizable>
                    <HeaderCell className="text-teal-600 text-base font-semibold">
                      Pemodalan
                    </HeaderCell>
                    <Cell>
                      {(rowData, rowIndex) => {
                        rowData.pemodalan =
                          rowData.pemodalan.toLocaleString("id-ID");
                        return (
                          <span tabIndex={rowIndex}>
                            Rp. {rowData.pemodalan}
                          </span>
                        );
                      }}
                    </Cell>
                  </Column>

                  <Column width={200} resizable>
                    <HeaderCell className="text-teal-600 text-base font-semibold">
                      Pendapatan Panen
                    </HeaderCell>
                    <Cell>
                      {(rowData, rowIndex) => {
                        rowData.pendapatan =
                          rowData.pendapatan.toLocaleString("id-ID");
                        return (
                          <span tabIndex={rowIndex}>
                            Rp. {rowData.pendapatan}
                          </span>
                        );
                      }}
                    </Cell>
                  </Column>

                  <Column width={170} sortable>
                    <HeaderCell className="text-teal-600 text-base font-semibold">
                      Bagi Hasil
                    </HeaderCell>
                    <Cell>
                      {(rowData, rowIndex) => {
                        rowData.bagi_hasil =
                          rowData.bagi_hasil.toLocaleString("id-ID");
                        return (
                          <span tabIndex={rowIndex}>
                            Rp. {rowData.bagi_hasil}
                          </span>
                        );
                      }}
                    </Cell>
                  </Column>

                  <Column width={160} sortable resizable>
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
                      <Icon
                        icon="ic:baseline-remove-red-eye"
                        color="grey"
                        fontSize={24}
                      />
                    </Cell>
                  </Column>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;

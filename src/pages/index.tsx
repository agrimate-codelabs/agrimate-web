import SuccessCharts from "@/components/atom/successCharts";
import TransactionCharts from "@/components/atom/transactionCharts";
import Card from "@/components/molecules/card";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import Label from "@/components/molecules/label";
import { dataList } from "@/components/atom/helper";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full">
        <h4 className="text-grey mt-6">Berdasarkan Rentang Waktu: </h4>
        <div className="flex flex-row gap-6 mt-6 mb-8">
          <Card
            title="Total Keuntungan"
            value="Rp47.250.000"
            icon="fa6-solid:money-bill"
            style="primary"
          />
          <Card
            title="Total Pemodalan"
            value="Rp123.700.000"
            icon="ic:baseline-sell"
            style="secondary"
          />
          <Card
            title="Total Keuntungan"
            value="1250"
            icon="icon-park-solid:buy"
            style="secondary"
          />
          <Card
            title="Total Keuntungan"
            value="143"
            icon="fluent:person-feedback-16-filled"
            style="secondary"
          />
        </div>
        <div className="flex flex-row gap-2.5">
          <div className="grow p-5 bg-white rounded-md shadow-lg">
            <div className="text-slate-700 text-lg font-semibold">
              Transaction Trends
            </div>
            <div className="text-neutral-500 text-xs font-normal">
              Terakhir update: 1 April 2023
            </div>
            <TransactionCharts />
          </div>
          <div className="flex-none self-center justify-center text-center p-5 bg-white rounded-md shadow-lg">
            <h4 className="font-semibold text-md">Keberhasilan Panen</h4>
            <SuccessCharts />
            <p className="text-black/light  w-64 font-normal">
              2475 dari 2750 total aktivitas tanam berhasil panen
            </p>
          </div>
        </div>
        {/* <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-md">
          <div className="px-4 py-5 flex-auto">
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

              <Column width={200} resizable>
                <HeaderCell className="text-teal-600 text-base font-semibold">
                  Nama Mitra
                </HeaderCell>
                <Cell dataKey="nama_mitra" />
              </Column>

              <Column width={200} sortable resizable>
                <HeaderCell className="text-teal-600 text-base font-semibold">
                  Kelompok Tani
                </HeaderCell>
                <Cell dataKey="kelompok_tani" />
              </Column>

              <Column width={200} sortable resizable>
                <HeaderCell className="text-teal-600 text-base font-semibold">
                  Tanggal Pengajuan
                </HeaderCell>
                <Cell dataKey="tanggal_pengajuan" />
              </Column>

              <Column width={170} sortable>
                <HeaderCell className="text-teal-600 text-base font-semibold">
                  Total
                </HeaderCell>
                <Cell>
                  {(rowData, rowIndex) => {
                    rowData.total = rowData.total.toLocaleString("id-ID");
                    return <span tabIndex={rowIndex}>Rp. {rowData.total}</span>;
                  }}
                </Cell>
              </Column>

              <Column width={120} sortable resizable>
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
                    color="black"
                    fontSize={24}
                  />
                </Cell>
              </Column>
              <Column width={50}>
                <HeaderCell> </HeaderCell>
                <Cell align="center">
                  <Icon icon="ri:more-2-fill" color="black" fontSize={24} />
                </Cell>
              </Column>
            </Table>
          </div>
        </div> */}
      </div>
    </>
  );
}

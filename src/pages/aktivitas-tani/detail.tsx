import React, { useEffect, useState } from "react";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/dist/css/rsuite-table.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import { dataAktivTanam } from "@/components/atom/helper";
import FilterButton from "@/components/molecules/filterButton";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { Tab, Tabs } from "@nextui-org/react";
import Label from "@/components/molecules/label";
import TabsDetailPetani from "@/components/atom/tabsDetailPetani";

export default function AktifitasTani() {
  const [search, setSearch] = useState("");
  const [openTab, setOpenTab] = React.useState("Tanam");

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem>Beranda</BreadcrumbItem>
        <BreadcrumbItem className=" font-medium">
          Mohammad Asep Sopandi
        </BreadcrumbItem>
        <BreadcrumbItem className=" font-medium">Lahan 1</BreadcrumbItem>
      </Breadcrumbs>
      <TabsDetailPetani
        search={search}
        openTab={openTab}
        setOpenTab={setOpenTab}
      >
        <div className="flex flex-row gap-2 mb-1 items-center my-4 justify-between px-3">
          <FilterButton search={search} setSearch={setSearch} />
        </div>
      </TabsDetailPetani>
    </>
  );
}

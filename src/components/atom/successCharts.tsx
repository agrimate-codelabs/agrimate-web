import React from "react";
import ReactEcharts from "echarts-for-react";

const SuccessCharts = () => {
  const option = {
    color: ["#FF3D3D", "#33AA5B"],
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 4,
        },
        label: {
          show: true,
          position: "center",
          formatter: "{d}%",
          fontSize: 22,
          fontWeight: "bold",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 735, name: "Gagal" },
          { value: 1048, name: "Berhasil" },
        ],
      },
    ],
  };

  return <ReactEcharts option={option} className="w-full" />;
};

export default SuccessCharts;

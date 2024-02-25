import React from "react";
import ReactEcharts from "echarts-for-react";

const transactionCharts = () => {
  const option = {
    // title: {
    //   text: "Stacked Line",
    // },
    color: ["#097BFD", "#FF3D3D"],
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Berhasil Panen", "Pelaporan Masalah"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Nov",
        "Dec",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Pelaporan Masalah",
        type: "line",
        data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290],
      },
      {
        name: "Berhasil Panen",
        type: "line",
        data: [120, 132, 101, 134, 90, 230, 210, 120, 500, 101, 134, 90],
      },
    ],
  };

  return <ReactEcharts option={option} lazyUpdate={true} />;
};

export default transactionCharts;

"use client"; // Ensure this component runs only on the client side

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// 🛠️ Dynamically import ApexCharts to prevent SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ColumnChart = () => {
    // 📊 Define column chart data and options
    const [chartData] = useState<{
        series: { name: string; data: number[] }[];
        options: ApexOptions;
    }>({
        series: [
            {
                name: "Revenue",
                data: [4500, 2000, 4900, 5200, 4500, 1500, 5400, 2700, 5900, 3800, 2000, 4600],
            },
        ],
        options: {
            chart: {
                type: "bar",
                height: 350,
            },
            title: {
                text: "Monthly Revenue",
                align: "center",
            },
            xaxis: {
                categories: [
                    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                ],
            },
            yaxis: {
                title: {
                    text: "Revenue ($)",
                },
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "45%",
                    borderRadius: 2,
                },
            },
            dataLabels: {
                enabled: false,
            },
            fill: {
                colors: ["#1E90FF"], // Change column color
            },
        },
    });

    return (
        <div className="w-full bg-white shadow-lg p-6 rounded-lg">
            <Chart options={chartData.options} series={chartData.series} type="bar" height={350} />
        </div>
    );
};

export default ColumnChart;

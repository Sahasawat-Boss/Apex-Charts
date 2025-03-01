"use client"; // Ensure this component runs only on the client side

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// 🛠️ Dynamically import ApexCharts to prevent SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CandleChart = () => {
    // 📊 Define candlestick chart data and options
    const [chartData] = useState<{
        series: { data: { x: string; y: number[] }[] }[];
        options: ApexOptions;
    }>({
        series: [
            {
                data: [
                    { x: "2024-02-01", y: [6600, 6650, 6500, 6620] },
                    { x: "2024-02-02", y: [6620, 6700, 6550, 6680] },
                    { x: "2024-02-03", y: [6680, 6780, 6600, 6700] },
                    { x: "2024-02-04", y: [6700, 6750, 6620, 6680] },
                    { x: "2024-02-05", y: [6680, 6800, 6600, 6700] },
                ],
            },
        ],
        options: {
            chart: {
                type: "candlestick",
                height: 350,
            },
            title: {
                text: "Stock Price Movement",
                align: "left",
            },
            xaxis: {
                type: "category", // Date format for X-axis
                labels: {
                    rotate: -45, // Slant labels for better readability
                },
            },
            yaxis: {
                tooltip: {
                    enabled: true,
                },
            },
        },
    });

    return (
        <div className="w-full bg-white shadow-lg p-6 rounded-lg">
            <Chart options={chartData.options} series={chartData.series} type="candlestick" height={350} />
        </div>
    );
};

export default CandleChart;

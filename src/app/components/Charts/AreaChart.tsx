"use client"; // Ensure this component runs only on the client side

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// 🛠️ Dynamically import ApexCharts to prevent SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AreaChart = () => {
    // 📊 Define area chart data and options
    const [chartData] = useState<{
        series: { name: string; data: number[] }[];
        options: ApexOptions;
    }>({
        series: [
            {
                name: "Revenue",
                data: [4500, 4700, 4900, 5300, 5000, 5500, 5900, 6000, 6200, 6400, 6600, 6800],
            },
        ],
        options: {
            chart: {
                type: "area",
                height: 350,
            },
            title: {
                text: "Monthly Revenue Growth",
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
            stroke: {
                curve: "smooth", // Smooth curve for better visualization
            },
            fill: {
                type: "gradient", // Gradient fill for area effect
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.4,
                    opacityTo: 0,
                    stops: [20, 100],
                },
            },
            dataLabels: {
                enabled: false, // Hide values on the chart for a cleaner look
            },
            colors: ["#28a745"], // Green color for the area chart
        },
    });

    return (
        <div className="w-full bg-white shadow-lg p-6 rounded-lg">
            <Chart options={chartData.options} series={chartData.series} type="area" height={350} />
        </div>
    );
};

export default AreaChart;

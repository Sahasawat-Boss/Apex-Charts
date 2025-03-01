"use client"; // 🔥 Add this at the top

import React, { useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic to load ApexCharts on the client
import { ApexOptions } from "apexcharts";

// Dynamically import react-apexcharts to prevent SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ApexChart2
    = () => {
        const [chartData] = useState<{
            series: { name: string; data: number[] }[];
            options: ApexOptions;
        }>({
            series: [
                {
                    name: "Sales",
                    data: [50, 60, 170, 0, 20, 80, 90, 250, 200],
                },
            ],
            options: {
                chart: {
                    type: "line",
                    height: 300,
                },
                title: {
                    text: "Monthly Sales 2",
                    align: "left",
                },
                xaxis: {
                    categories: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                    ],
                },
            },
        });

        return (
            <div className="w-full max-w-lg mx-auto bg-white shadow-lg p-4 rounded-lg">
                <Chart options={chartData.options} series={chartData.series} type="line" height={350} />
            </div>
        );
    };

export default ApexChart2
    ;

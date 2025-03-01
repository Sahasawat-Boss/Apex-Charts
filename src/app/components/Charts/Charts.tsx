"use client"; // 🔥 Ensures this component runs only on the client side in Next.js (prevents SSR issues)

import React, { useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic to load ApexCharts on the client
import { ApexOptions } from "apexcharts"; // Import ApexCharts options type

// 🛠️ Dynamically import react-apexcharts to prevent SSR (Server-Side Rendering) issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ApexChart = () => {
    // 📊 Define chart data and options using React state
    const [chartData] = useState<{
        series: { name: string; data: number[] }[]; // Data series for the chart
        options: ApexOptions; // ApexCharts options (typed for TypeScript support)
    }>({
        series: [
            {
                name: "Sales", // Name of the data series
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148], // Sales data for each month
            },
        ],
        options: {
            chart: {
                type: "line", // Type of chart (e.g., line, bar, pie)
                height: 350, // Chart height in pixels
            },
            title: {
                text: "Monthly Sales 1", // Chart title
                align: "left", // Center align the title
            },
            xaxis: {
                categories: [
                    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"
                ], // Labels for the X-axis (Months)
            },
        },
    });

    return (
        <div className="w-full bg-white shadow-lg p-4 rounded-lg">
            {/* 📊 Render the ApexCharts component */}
            <Chart
                options={chartData.options} // Pass chart configuration
                series={chartData.series} // Pass data series
                type="line" // Set chart type (matches the `options.chart.type`)
                height={350} // Set chart height
            />
        </div>
    );
};

export default ApexChart; // ✅ Export the component for use in other parts of the app

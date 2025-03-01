import ApexChart from "@/app/components/Charts/Charts";
//import ApexChart2 from "@/app/components/Charts/Charts2";
import CandleChart from "./components/Charts/CandleChart";
import ColumnChart from "./components/Charts/ColumnChart";
import AreaChart from "./components/Charts/AreaChart";
// import CustomImage from "./components/Charts/CustomImg";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-8">

      {/* <div className="absolute top-80 right-[820px] z-50">
        <CustomImage />
      </div> */}

      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-white mb-4 text-center tracking-wide">
        ApexCharts Dashboard
      </h1>
      <p className="text-lg text-gray-300 mb-8 text-center max-w-2xl">
        Interactive and dynamic data visualizations powered by ApexCharts in Next.js.
      </p>

      {/* Chart Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Chart 1 */}
        <div className="bg-gray-800 shadow-lg rounded-xl p-6 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-2 text-white">Sales Trend</h2>
          <p className="text-gray-400 text-sm mb-4">
            A line chart showing the monthly sales trend over time.
          </p>
          <ApexChart />
        </div>

        {/* Chart 2 */}
        <div className="bg-gray-800 shadow-lg rounded-xl p-6 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-2 text-white">Stock Market Analysis</h2>
          <p className="text-gray-400 text-sm mb-4">
            A candlestick chart visualizing stock price fluctuations.
          </p>
          <CandleChart />
        </div>

        {/* Chart 3 */}
        <div className="bg-gray-800 shadow-lg rounded-xl p-6 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-2 text-white">Monthly Revenue</h2>
          <p className="text-gray-400 text-sm mb-4">
            A column chart displaying revenue growth across different months.
          </p>
          <ColumnChart />
        </div>

        {/* Chart 4 */}
        <div className="bg-gray-800 shadow-lg rounded-xl p-6 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-2 text-white">Revenue Growth</h2>
          <p className="text-gray-400 text-sm mb-4">
            An area chart illustrating the progressive growth of revenue.
          </p>
          <AreaChart />
        </div>
      </div>
    </main>
  );
};

export default Home;

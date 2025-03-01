import ApexChart from "@/app/components/Charts/Charts";
//import ApexChart2 from "@/app/components/Charts/Charts2";
import CandleChart from "./components/Charts/CandleChart";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-700 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        ApexCharts
      </h1>

      {/* Chart Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Chart 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Chart 1</h2>
          <ApexChart />
        </div>

        {/* Chart 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Chart 2</h2>
          <CandleChart />
        </div>

        {/* Chart 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Chart 2</h2>
          <CandleChart />
        </div>
      </div>
    </main >
  );
};

export default Home;

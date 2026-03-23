import { Line } from "react-chartjs-2";

const DailyOrdersChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Orders",
        data: [220, 245, 232, 280, 310, 295, 340],
        borderColor: "#f97316",
        backgroundColor: "rgba(249, 115, 22, 0.25)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
  };

  return (
    <div className="chart-card">
      <h3>Daily Orders Trend</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default DailyOrdersChart;

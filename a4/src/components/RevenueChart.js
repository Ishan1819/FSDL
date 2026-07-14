import { Bar } from "react-chartjs-2";

const RevenueChart = () => {
  const data = {
    labels: ["Electronics", "Fashion", "Home", "Beauty", "Sports"],
    datasets: [
      {
        label: "Revenue (USD)",
        data: [5200, 3900, 4600, 3100, 2800],
        backgroundColor: ["#2563eb", "#0ea5e9", "#14b8a6", "#22c55e", "#84cc16"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.parsed.y.toLocaleString()}`,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => `$${value.toLocaleString()}`,
        },
      },
    },
  };

  return (
    <div className="chart-card">
      <h3>Revenue by Category</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RevenueChart;

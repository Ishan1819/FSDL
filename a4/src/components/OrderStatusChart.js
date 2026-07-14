import { Bar } from "react-chartjs-2";

const OrderStatusChart = () => {
  const data = {
    labels: ["Delivered", "Shipped", "Processing", "Cancelled"],
    datasets: [
      {
        label: "Orders",
        data: [510, 146, 94, 22],
        backgroundColor: ["#16a34a", "#0284c7", "#f59e0b", "#dc2626"],
        borderRadius: 8,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="chart-card">
      <h3>Order Status Breakdown</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default OrderStatusChart;

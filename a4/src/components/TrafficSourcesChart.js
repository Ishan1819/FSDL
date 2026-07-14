import { Doughnut } from "react-chartjs-2";

const TrafficSourcesChart = () => {
  const data = {
    labels: ["Organic Search", "Ads", "Social", "Email"],
    datasets: [
      {
        data: [42, 28, 18, 12],
        backgroundColor: ["#1d4ed8", "#0ea5e9", "#10b981", "#f59e0b"],
      },
    ],
  };

  return (
    <div className="chart-card">
      <h3>Traffic Sources</h3>
      <Doughnut data={data} />
    </div>
  );
};

export default TrafficSourcesChart;

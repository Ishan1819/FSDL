import "./App.css";
import "./chartSetup";
import RevenueChart from "./components/RevenueChart";
import DailyOrdersChart from "./components/DailyOrdersChart";
import TrafficSourcesChart from "./components/TrafficSourcesChart";
import OrderStatusChart from "./components/OrderStatusChart";

function App() {
  return (
    <div className="app">
      <h1>Ecommerce Analytics Dashboard</h1>
      <p className="subtitle">A weekly snapshot of revenue, orders, traffic, and fulfillment trends.</p>

      <div className="charts">
        <DailyOrdersChart />
        <TrafficSourcesChart />
        <OrderStatusChart />
        <RevenueChart />
      </div>
    </div>
  );
}

export default App;

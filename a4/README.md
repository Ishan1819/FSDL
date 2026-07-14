# Assignment 4 — E-commerce Analytics Dashboard

A React dashboard that visualizes weekly e-commerce metrics (revenue, orders, traffic, fulfillment) using Chart.js.

## Aim
To build a data-visualization dashboard in React using Chart.js, demonstrating multiple chart types (line, bar, doughnut/pie) driven by static sample data.

## Technologies Used
- React 19 (Create React App)
- [Chart.js](https://www.chartjs.org/) via `react-chartjs-2`

## Features
- **Daily Orders Chart** — trend of orders placed per day
- **Traffic Sources Chart** — breakdown of visitor traffic by source
- **Order Status Chart** — distribution of order statuses (e.g., delivered, pending, cancelled)
- **Revenue Chart** — revenue trend over the week

## Project Structure
```
src/
  components/
    DailyOrdersChart.js
    TrafficSourcesChart.js
    OrderStatusChart.js
    RevenueChart.js
  chartSetup.js   # registers Chart.js components/plugins
  App.js          # dashboard layout
```

## Run
```bash
npm install
npm start
```
Open [http://localhost:3000](http://localhost:3000).

## Test
```bash
npm test
```

## Build
```bash
npm run build
```

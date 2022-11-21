import { ChartOptions } from "chart.js";

const OPTIONS: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      grid: {
        borderDash: [10, 10],
      },
      beginAtZero: true,
    },
    x: {
      display: true,
    },
  },
};

export default OPTIONS;

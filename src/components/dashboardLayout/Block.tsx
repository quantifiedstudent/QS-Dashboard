import Chart, { ChartConfiguration } from "chart.js/auto";
import React, { useRef } from "react";

const Graph = () => {
  const canvasEl = useRef(null);
  React.useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");

    const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2];
    const labels = [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
      "Week 9",
      "Week 10",
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "My First Dataset",
          data: weight,
          fill: true,
          borderWidth: 2,
          lineTension: 0.2,
          pointRadius: 3,
        },
      ],
    };
    const config = {
      type: "line",
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    } as ChartConfiguration;
    const myLineChart = new Chart(ctx, config);

    return () => {
      myLineChart.destroy();
    };
  }, []);
  return <canvas id="line-chart" ref={canvasEl}></canvas>;
};

export default Graph;

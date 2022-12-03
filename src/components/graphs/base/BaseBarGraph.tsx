import QsChart from "@Services/graph/computeGraph";
import { GraphObject } from "@Services/graph/GraphAxis";
import { useRef, useEffect } from "react";

interface Props {
  chartData: GraphObject[];
}

const BaseLineGraph = ({ chartData }: Props) => {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvas.current) return;

    const canvasContext = canvas.current.getContext("2d");

    if (!canvasContext) return;

    const chart = new QsChart(
      chartData,
      chartData[0].labels,
      canvasContext
    ).generateChart();

    return () => {
      chart.destroy();
    };
  }, [chartData]);

  return <canvas ref={canvas}></canvas>;
};

export default BaseLineGraph;

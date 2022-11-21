import QsChart from "@Services/graph/ComputeGraph";
import { GraphObject } from "@Services/graph/GraphAxis";
import { useRef, useEffect } from "react";

interface Props {
  chartData: GraphObject[];
}

const BaseLineGraph = ({ chartData }: Props) => {
  const labels = ["a", "b", "c", "d", "e", "f", "g", "h"];

  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvas.current) return;

    const canvasContext = canvas.current.getContext("2d");

    if (!canvasContext) return;

    const chart = new QsChart(chartData, labels, canvasContext).generateChart();

    return () => {
      chart.destroy();
    };
  }, [chartData, labels]);

  return <canvas ref={canvas}></canvas>;
};

export default BaseLineGraph;

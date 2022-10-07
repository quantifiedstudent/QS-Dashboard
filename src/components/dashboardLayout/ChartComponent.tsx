import { useEffect, useRef } from "react";
import { XAxis, YAxis } from "../../interfaces/graph/GraphAxis";
import { QsGraph } from "../../interfaces/graph/QSGraphs";
import QsChart from "../../services/graph/computeGraph";

interface ChartComponentProps {
  labels: Array<XAxis>;
  data: Array<YAxis>;
  chart: QsGraph;
}

const ChartComponent = (props: ChartComponentProps) => {
  const canvasEl = useRef(null);

  useEffect(() => {
    let ctx = canvasEl.current.getContext("2d");

    const chart = new QsChart(
      props.chart,
      props.labels,
      props.data,
      ctx
    ).generateChart();

    return () => chart.destroy();
  }, [props]);

  return <canvas ref={canvasEl}></canvas>;
};

export default ChartComponent;

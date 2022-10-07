import { useEffect, useRef } from "react";
import { XAxis, YAxis } from "../../interfaces/GraphData";
import { GraphProps, QsGraph } from "../../interfaces/QSGraphs";
import QsChart from "../../services/graph/computeGraph";

const ChartComponent = (props: {
  labels: Array<XAxis>;
  data: Array<YAxis>;
  chart: QsGraph;
}) => {
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

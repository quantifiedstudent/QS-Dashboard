import { useEffect, useRef } from "react";
import { GraphObject, XAxis, YAxis } from "../../interfaces/graph/GraphAxis";
import { QsGraph } from "../../interfaces/graph/QSGraphs";
import QsChart from "../../services/graph/computeGraph";

interface ChartComponentProps {
  charts: Array<GraphObject>;
}

const ChartComponent = (props: ChartComponentProps) => {
  const CANVAS_EL = useRef(null);

  useEffect(() => {
    let ctx = CANVAS_EL.current.getContext("2d");

    const CHART = new QsChart(
      props.charts,
      props.charts[0].labels,
      ctx
    ).generateChart();

    return () => CHART.destroy();
  }, [props]);

  return <canvas ref={CANVAS_EL}></canvas>;
};

export default ChartComponent;

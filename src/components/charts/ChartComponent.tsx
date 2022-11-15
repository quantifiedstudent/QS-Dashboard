// import { useEffect, useRef } from "react";

// import { GraphObject } from "@Interfaces/graph/GraphAxis";
// import QsChart from "@Services/graph/ComputeGraph";

// interface ChartComponentProps {
//   charts: Array<GraphObject>;
// }

// const ChartComponent = (props: ChartComponentProps) => {
//   const CANVAS_EL = useRef(null);

//   useEffect(() => {
//     let ctx = CANVAS_EL.current.getContext("2d");

//     const CHART = new QsChart(
//       props.charts,
//       props.charts[0].labels,
//       ctx
//     ).generateChart();

//     return () => CHART.destroy();
//   }, [props]);

//   return <canvas ref={CANVAS_EL}></canvas>;
// };

// export default ChartComponent;

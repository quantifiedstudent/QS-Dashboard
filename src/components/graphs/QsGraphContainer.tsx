import { BaseQsGraphShape, QsGraph } from "@Services/graph/QSGraphs";

import styles from "./style.module.scss";

type ChartContainer = {
  QsGraph: BaseQsGraphShape;
};

const ChartContainer = (props: ChartContainer) => {
  const GraphElement = QsGraph[props.QsGraph.graph];
  return (
    <>
      <div className={styles.chart_header}>
        <span className={styles.chart_title}>
          <p>{props.QsGraph.title}</p>
        </span>
      </div>
      <div className={styles.chart_container}>
        <GraphElement />
      </div>
    </>
  );
};

export default ChartContainer;

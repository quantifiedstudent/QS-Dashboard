import { BaseQsGraphShape, QsGraph } from "@Services/graph/QSGraphs";

import styles from "./style.module.scss";

type ChartContainer = {
  QsGraph: BaseQsGraphShape;
};

const ChartContainer = (props: ChartContainer) => {
  const GraphElement = QsGraph[props.QsGraph.graph];
  return (
    <>
      <div className={styles.ChartHeader}>
        <span className={styles.ChartTitle}>
          <p>{props.QsGraph.title}</p>
        </span>
      </div>
      <div className={styles.ChartContainer}>
        <GraphElement />
      </div>
    </>
  );
};

export default ChartContainer;

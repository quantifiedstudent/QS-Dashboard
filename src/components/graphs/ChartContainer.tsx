import { QsGraph } from "@Interfaces/graph/QSGraphs";

import styles from "@Styles/components/ChartComponent.module.scss";

type ChartContainer = {
  QsGraph: QsGraph;
};

const ChartContainer = (props: ChartContainer) => {
  return (
    <>
      <div className={styles.ChartHeader}>
        <span className={styles.ChartTitle}>
          <p>{props.QsGraph.metadata.title}</p>
        </span>
      </div>
      <div className={styles.ChartContainer}>
        <props.QsGraph.metadata.content.graph graph={props.QsGraph} />
      </div>
    </>
  );
};

export default ChartContainer;

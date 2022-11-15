import { useEffect, useState } from "react";

import { QsGraph } from "@Interfaces/graph/QSGraphs";
import { GraphObject } from "@Interfaces/graph/GraphAxis";
import { ApiRequest } from "@Services/api/ExtractData";

import styles from "@Styles/components/ChartComponent.module.scss";

type ChartContainer = {
  QsGraph: QsGraph;
};

const ChartContainer = (props: ChartContainer) => {
  // const [STATE, SET_STATE] = useState<Array<GraphObject>>([
  //   { labels: [], data: [], graph: QsGraph.DEFAULT },
  // ]);

  // useEffect(() => {
  //   const fetchGraphData = async () => {
  //     const WAIT_FOR_DATA = new Promise<Array<GraphObject>>(
  //       (resolve, reject) => {
  //         let returnValue: Array<GraphObject> = new Array<GraphObject>();

  //         props.QsGraph.forEach(async (graph, i) => {
  //           const [LABELS, DATA] = await new ApiRequest(
  //             graph.endpoint
  //           ).getData();

  //           returnValue.push({
  //             graph: graph,
  //             labels: LABELS,
  //             data: DATA,
  //           });

  //           if (i === props.QsGraph.length - 1) {
  //             resolve(returnValue);
  //           }
  //         });
  //       }
  //     );

  //     WAIT_FOR_DATA.then((res: Array<GraphObject>) => {
  //       SET_STATE(res);
  //     });
  //   };

  //   fetchGraphData();
  // }, [props.QsGraph]);

  return (
    <>
      <div className={styles.ChartHeader}>
        <span className={styles.ChartTitle}>
          <p>{props.QsGraph.metadata.title}</p>
        </span>
      </div>
      <div className={styles.ChartContainer}>
        <props.QsGraph.metadata.graph graph={props.QsGraph} />
      </div>
    </>
  );
};

export default ChartContainer;

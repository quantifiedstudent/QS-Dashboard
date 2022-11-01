import { useEffect, useState } from "react";

import ChartComponent from "@Components/dashboardLayout/ChartComponent";
import { QsGraph } from "@Interfaces/graph/QSGraphs";
import { GraphObject } from "@Interfaces/graph/GraphAxis";
import { ApiRequest } from "@Services/api/ExtractData";

import styles from "@Styles/components/ChartComponent.module.scss";

interface ChartContainer {
  QsGraph: Array<QsGraph>;
}

const ChartContainer = (props: ChartContainer) => {
  const [STATE, SET_STATE] = useState<Array<GraphObject>>([
    { labels: [], data: [], graph: QsGraph.DEFAULT },
  ]);

  useEffect(() => {
    const fetchGraphData = async () => {
      const WAIT_FOR_DATA = new Promise<Array<GraphObject>>(
        (resolve, reject) => {
          let returnValue: Array<GraphObject> = new Array<GraphObject>();

          props.QsGraph.forEach(async (graph, i) => {
            const [LABELS, DATA] = await new ApiRequest(
              graph.endpoint
            ).getData();

            returnValue.push({
              graph: graph,
              labels: LABELS,
              data: DATA,
            });

            if (i === props.QsGraph.length - 1) {
              resolve(returnValue);
            }
          });
        }
      );

      WAIT_FOR_DATA.then((res: Array<GraphObject>) => {
        SET_STATE(res);
      });
    };

    fetchGraphData();
  }, [props.QsGraph]);

  return (
    <>
      <div className={styles.ChartHeader}>
        <span className={styles.ChartTitle}>
          {props.QsGraph.map((graph, i) => {
            if (i + 1 !== props.QsGraph.length) return `${graph.label} vs `;

            return graph.label;
          })}
        </span>
      </div>
      <div className={styles.ChartContainer}>
        <ChartComponent charts={STATE}></ChartComponent>
      </div>
    </>
  );
};

export default ChartContainer;

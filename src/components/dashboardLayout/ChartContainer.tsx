import { useEffect, useState } from "react";
import { XAxis, YAxis } from "../../interfaces/graph/GraphAxis";
import { QsGraph } from "../../interfaces/graph/QSGraphs";
import { ApiRequest } from "../../services/api/ExtractData";
import ChartComponent from "./ChartComponent";
import { GraphObject } from "../../interfaces/graph/GraphAxis";

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
            ).GetData();

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
  }, []);

  return <ChartComponent charts={STATE}></ChartComponent>;
};

export default ChartContainer;

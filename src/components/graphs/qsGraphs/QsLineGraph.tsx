import { useEffect, useRef, useState } from "react";

import { GraphObject } from "@Interfaces/graph/GraphAxis";
import QsChart from "@Services/graph/ComputeGraph";
import { QsGraph } from "@Interfaces/graph/QSGraphs";
import { ApiRequest } from "@Services/api/ExtractData";

const QsLineGraph = (props: { graph: QsGraph }): JSX.Element => {
  const [STATE, SET_STATE] = useState<Array<GraphObject>>([
    { labels: [], data: [] },
  ]);

  const CANVAS_EL = useRef(null);

  useEffect(() => {
    let ctx = CANVAS_EL.current.getContext("2d");

    const fetchGraphData = async () => {
      const WAIT_FOR_DATA = new Promise<Array<GraphObject>>(
        (resolve, reject) => {
          let returnValue: Array<GraphObject> = new Array<GraphObject>();

          props.graph.metadata.content.endpoint.forEach(async (endpoint, i) => {
            const [LABELS, DATA] = await new ApiRequest(endpoint).getData();

            returnValue.push({
              labels: LABELS,
              data: DATA,
            });

            if (i === props.graph.metadata.content.endpoint.length - 1) {
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

    const CHART = new QsChart(STATE, STATE[0].labels, ctx).generateChart();

    return () => CHART.destroy();
  }, [props]);

  return <canvas ref={CANVAS_EL}></canvas>;
};

export default QsLineGraph;

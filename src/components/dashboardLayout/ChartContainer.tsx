import { useEffect, useState } from "react";
import { QsGraph } from "../../interfaces/graph/QSGraphs";
import { APIRequest } from "../../services/api/extractData";
import ChartComponent from "./ChartComponent";

interface ChartContainer {
  QsGraph: QsGraph;
}

const ChartContainer = (props: ChartContainer) => {
  const [state, setState] = useState({ labels: [], data: [] });

  useEffect(() => {
    const fetchGraphData = async () => {
      const [labels, data] = await new APIRequest(
        props.QsGraph.endpoint
      ).GetData();

      setState({ labels: labels, data: data });
    };

    fetchGraphData();
  }, []);

  return (
    <ChartComponent
      labels={state.labels}
      data={state.data}
      chart={props.QsGraph}
    ></ChartComponent>
  );
};

export default ChartContainer;

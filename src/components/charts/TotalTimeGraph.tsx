import { TotalGraph, TotalGraphShape } from "@Interfaces/charts/TotalGraph";
import { QsGraph } from "@Interfaces/graph/QSGraphs";
import QS_API from "@Services/api/WebApi";
import styles from "@Styles/components/graphs/TotalTimeSpentAtSchool.module.scss";
import { useEffect, useState } from "react";

const TotalTimeSpentAtSchool = (props: { graph: QsGraph }): JSX.Element => {
  const [graphData, setGraphData] = useState<TotalGraphShape>(
    new TotalGraph({})
  );

  useEffect(() => {
    const fetchGraphData = async () => {
      const { data } = await QS_API.get(props.graph.metadata.endpoint);

      setGraphData(data);
    };

    fetchGraphData();
  }, [props.graph]);

  return (
    <div className={styles.graph_container}>
      <h1 className={styles.graph_header}>{graphData.total} hours</h1>
      <span className={styles.graph_details_container}>
        {graphData.comparison.map((value) => {
          return (
            <p key={value.value}>
              <span className={styles.graph_details}>{value.value}</span>
              {" vs. "}
              {value.comparedTo}
            </p>
          );
        })}
      </span>
    </div>
  );
};

export default TotalTimeSpentAtSchool;

import { QsGraphDefinition } from "@Services/graph/QSGraphs";
import GraphCategoryProps from "../store/types/GraphCategoryProps";
import GraphCard from "./base/BaseGraphCard";
import BaseGraphCategory from "./base/BaseGraphCategory";

const HealthGraphs = (props: GraphCategoryProps) => {
  return (
    <BaseGraphCategory header="Health graphs">
      <>
        <GraphCard
          handler={() =>
            props.graphHandler(QsGraphDefinition.TotalSleepingTime)
          }
        >
          Total sleeping time
        </GraphCard>
      </>
    </BaseGraphCategory>
  );
};

export default HealthGraphs;

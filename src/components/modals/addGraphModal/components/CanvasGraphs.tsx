import { QsGraphDefinition } from "@Services/graph/QSGraphs";
import GraphCategoryProps from "../store/types/GraphCategoryProps";
import GraphCard from "./base/BaseGraphCard";
import BaseGraphCategory from "./base/BaseGraphCategory";

const CanvasGraphs = (props: GraphCategoryProps) => {
  return (
    <BaseGraphCategory header="Canvas graphs">
      <>
        <GraphCard
          handler={() => props.graphHandler(QsGraphDefinition.AvarageGrade)}
        >
          Avarage grade
        </GraphCard>
        <GraphCard
          handler={() => props.graphHandler(QsGraphDefinition.OngoingCourse)}
        >
          Ongoing course
        </GraphCard>
      </>
    </BaseGraphCategory>
  );
};

export default CanvasGraphs;

import { QsGraphDefinition } from "@Services/graph/QSGraphs";
import GraphCategoryProps from "../store/types/GraphCategoryProps";
import GraphCard from "./base/BaseGraphCard";
import BaseGraphCategory from "./base/BaseGraphCategory";

const AttendanceGraphs = (props: GraphCategoryProps) => {
  return (
    <BaseGraphCategory header="Attendance graphs">
      <>
        <GraphCard
          handler={() =>
            props.graphHandler(QsGraphDefinition.TotalTimeSpentAtSchool)
          }
        >
          Total time at school
        </GraphCard>
      </>
    </BaseGraphCategory>
  );
};

export default AttendanceGraphs;

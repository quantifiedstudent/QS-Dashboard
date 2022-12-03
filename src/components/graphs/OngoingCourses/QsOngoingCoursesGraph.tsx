import styles from "./style.module.scss";
import classNames from "@Services/helpers/ClassCombiner";
import { useState, useEffect } from "react";
import { ongoingCourse } from "./store";
import { OngoingCourseShape } from "@Services/graph/dto/OngoingCourse";

const OngoingCoursesGraph = (): JSX.Element => {
  const [graphData, setGraphData] = useState<OngoingCourseShape>();

  useEffect(() => {
    const fetchGraphData = async () => {
      const data = await ongoingCourse();

      const calculatedData = calculateValues(data);

      setGraphData(calculatedData);
    };

    const calculateValues = (data: OngoingCourseShape): OngoingCourseShape => {
      const total: number = data.notSubmitted + data.submitted;
      const notSubmittedPercentage: number = Math.round(
        (data.notSubmitted / total) * 100
      );
      const submittedPercentage: number = Math.round(
        (data.submitted / total) * 100
      );

      return {
        notSubmitted: notSubmittedPercentage,
        submitted: submittedPercentage,
      };
    };

    fetchGraphData();
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div
          style={{ width: `${graphData?.submitted}%` }}
          className={classNames(styles.inner_container, styles.inner_submitted)}
        >
          <span className={classNames(styles.scale, styles.submitted)}>
            {graphData?.submitted}
          </span>
          <span className={styles.label}>Submitted</span>
        </div>
        <div
          style={{ width: `${graphData?.notSubmitted}%` }}
          className={classNames(
            styles.inner_container,
            styles.inner_not_submitted
          )}
        >
          <span className={classNames(styles.scale, styles.not_submitted)}>
            {graphData?.notSubmitted}
          </span>
          <span className={styles.label}>Not submitted</span>
        </div>
      </div>
    </div>
  );
};

export default OngoingCoursesGraph;

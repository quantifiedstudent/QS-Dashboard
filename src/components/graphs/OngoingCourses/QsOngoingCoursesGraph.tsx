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

        const calculateValues = (
            data: OngoingCourseShape
        ): OngoingCourseShape => {
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
                    className="flex flex-col justify-start"
                >
                    <span className="h-8 w-full flex items-center bg-red-600">
                        {graphData?.submitted}
                    </span>
                    <span className="text-sm">Submitted</span>
                </div>
                <div
                    style={{ width: `${graphData?.notSubmitted}%` }}
                    className="flex flex-col justify-end"
                >
                    <span className="h-8 w-full flex items-center bg-green-600 justify-end">
                        {graphData?.notSubmitted}
                    </span>
                    <span className="text-sm">Not submitted</span>
                </div>
            </div>
        </div>
    );
};

export default OngoingCoursesGraph;

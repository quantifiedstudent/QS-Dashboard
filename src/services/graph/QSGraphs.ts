import QsTotalTimeAtSchool from "@Components/graphs/TotalTimeSpentAtSchool/QsTotalTimeSpentAtSchool";
import AvarageGradeGraph from "@Components/graphs/AvarageGrade/QsAvarageGradeGraph";
import QsTotalSleepingTime from "@Components/graphs/TotalSleepingTime/QsTotalSleepingTimeGraph";
import QsOngoingCourse from "@Components/graphs/OngoingCourses/QsOngoingCoursesGraph";

export interface BaseQsGraphShape {
  readonly title: string;
  readonly graph: AvailableGraphs;
  readonly options: QsOptions;
}

interface QsOptions {
  readonly resizable: boolean;
  readonly height: number;
  readonly width: number;
}

const TotalGraphOptions = {
  resizable: false,
  height: 1,
  width: 1,
};
const DefaultGraphOptions = {
  resizable: true,
  height: 2,
  width: 1,
};

enum AvailableGraphs {
  TotalTimeSpentAtSchool = "TotalTimeSpentAtSchool",
  AvarageGrade = "AvarageGrade",
  TotalSleepingTime = "TotalSleepingTime",
  OngoingCourse = "OngoingCourse",
}

type QsGraphDefinition = {
  [key in AvailableGraphs]: BaseQsGraphShape;
};

type QsGraphElements = {
  [key in AvailableGraphs]: () => JSX.Element;
};

export const QsGraph: QsGraphElements = {
  TotalTimeSpentAtSchool: QsTotalTimeAtSchool,
  AvarageGrade: AvarageGradeGraph,
  TotalSleepingTime: QsTotalSleepingTime,
  OngoingCourse: QsOngoingCourse,
};

export const QsGraphDefinition: QsGraphDefinition = {
  TotalTimeSpentAtSchool: {
    title: "Time spent at school",
    graph: AvailableGraphs.TotalTimeSpentAtSchool,
    options: TotalGraphOptions,
  },
  TotalSleepingTime: {
    title: "Total sleeping time",
    graph: AvailableGraphs.TotalSleepingTime,
    options: TotalGraphOptions,
  },
  AvarageGrade: {
    title: "Avarage grade",
    graph: AvailableGraphs.AvarageGrade,
    options: DefaultGraphOptions,
  },
  OngoingCourse: {
    title: "Ongoing courses",
    graph: AvailableGraphs.OngoingCourse,
    options: TotalGraphOptions,
  },
};

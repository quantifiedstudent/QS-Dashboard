import QsTotalGraph from "@Components/graphs/qsGraphs/QsTotalGraph";
import QsLineGraph from "@Components/graphs/qsGraphs/QsLineGraph";

interface BaseQsGraphShape {
  readonly title: string;
  readonly content: GraphContent;
  readonly options: QsOptions;
}

interface QsOptions {
  readonly resizable: boolean;
  readonly height: number;
  readonly width: number;
}

interface GraphContent {
  endpoint: Array<string>;
  graph: (props: { graph: QsGraph }) => JSX.Element;
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

export class QsGraph {
  static readonly TimeSpentAtSchool = new QsGraph({
    title: "Time spent at school",
    content: { endpoint: ["TotalTimeAtSchool"], graph: QsTotalGraph },
    options: TotalGraphOptions,
  });
  static readonly SleepingTime = new QsGraph({
    title: "Total sleeping time",
    content: { endpoint: ["TotalSleepingTime"], graph: QsTotalGraph },
    options: TotalGraphOptions,
  });
  static readonly AvarageGrade = new QsGraph({
    title: "Avarage grade",
    content: { endpoint: ["AvarageGrade"], graph: QsLineGraph },
    options: DefaultGraphOptions,
  });

  private constructor(public metadata: BaseQsGraphShape) {}
}

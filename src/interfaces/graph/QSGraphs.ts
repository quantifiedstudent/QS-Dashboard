import { GraphType } from "@Interfaces/graph/Graph";
import React from "react";
import TotalTimeSpentAtSchool from "@Components/charts/TotalTimeGraph";

/**
 * <summary>
 *  This class defines every graph you can choose on the dashboard
 * </summary>
 *
 * @param: Label -> the label line will have
 * @param: Type -> the type the graph will have e.g line, bar, pie etc.
 * @param: endpoint -> the api endpoint the data for the graph comes from
 */

interface QsGraphShape {
  readonly title: string;
  readonly graph: (props: { graph: QsGraph }) => JSX.Element;
  readonly endpoint: string;
  readonly resizable: boolean;
  readonly height: number;
  readonly width: number;
}

const baseTotalGraph = {
  graph: TotalTimeSpentAtSchool,
  resizable: false,
  height: 1,
  width: 1,
};

export class QsGraph {
  static readonly TIMESPENTATSCHOOL = new QsGraph({
    title: "Time spent at school",
    endpoint: "TotalTimeAtSchool",
    ...baseTotalGraph,
  });
  static readonly SLEEPINGTIME = new QsGraph({
    title: "Total sleeping time",
    endpoint: "TotalSleepingTime",
    ...baseTotalGraph,
  });

  private constructor(public metadata: QsGraphShape) {}
}

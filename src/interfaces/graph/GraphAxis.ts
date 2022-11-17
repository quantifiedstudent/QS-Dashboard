import { QsGraph } from "@Interfaces/graph/QSGraphs";

export type XAxis = string | number;
export type YAxis = number;

export interface DataPoint {
  x: XAxis;
  y: YAxis;
}

export interface GraphObject {
  labels: Array<XAxis>;
  data: Array<YAxis>;
}

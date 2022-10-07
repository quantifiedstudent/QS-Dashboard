import { XAxis, YAxis } from "./GraphAxis";

export enum GraphType {
  BAR = "bar",
  BUBBLE = "bubble",
  DOUGHNUT = "doughnut",
  PIE = "pie",
  LINE = "line",
}

interface BaseDataSetShape {
  label: string;
  data: Array<YAxis>;
}

export interface DataSetShape extends BaseDataSetShape {
  type?: GraphType;
  fill?: boolean;
  borderColor?: string;
  pointBackgroundColor?: string;
  borderWidth?: number;
  lineTension?: number;
  pointRadius?: number;
}

export class DataSet implements DataSetShape {
  constructor(options: DataSetShape) {
    this.type = options.type || GraphType.LINE;
    this.label = options.label;
    this.data = options.data;
    this.fill = options.fill || false;
    this.borderColor = options.borderColor || "rgb(3, 116, 181)";
    this.pointBackgroundColor =
      options.pointBackgroundColor || "rgb(255, 255, 255)";
    this.borderWidth = options.borderWidth || 3;
    this.lineTension = options.lineTension || 0.3;
    this.pointRadius = options.pointRadius || 4;
  }
  type: GraphType;
  label: string;
  data: Array<YAxis>;
  fill: boolean;
  borderColor: string;
  pointBackgroundColor: string;
  borderWidth: number;
  lineTension: number;
  pointRadius: number;
}

export interface GraphShape {
  labels: Array<XAxis>;
  dataSets: Array<DataSet>;
}

export class Graph implements GraphShape {
  labels: Array<XAxis>;
  dataSets: Array<DataSet>;

  constructor(options: GraphShape) {
    this.labels = options.labels;
    this.dataSets = options.dataSets;
  }
}

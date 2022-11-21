import { XAxis, YAxis } from "@Services/graph/GraphAxis";

export enum GraphType {
  BAR = "bar",
  BUBBLE = "bubble",
  DOUGHNUT = "doughnut",
  PIE = "pie",
  LINE = "line",
  TOTAL = "total",
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
  backgroundColor?: string;
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
    this.backgroundColor = options.backgroundColor || "rgb(255, 255, 255)";
    this.borderWidth = options.borderWidth || 1.5;
    this.lineTension = options.lineTension || 0.3;
    this.pointRadius = options.pointRadius || 2;
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
  backgroundColor: string;
}

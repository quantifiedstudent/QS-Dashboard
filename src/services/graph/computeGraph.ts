import Chart, { ChartConfiguration } from "chart.js/auto";
import { DataSet } from "../../interfaces/Graph";
import { XAxis, YAxis } from "../../interfaces/GraphData";
import { QsGraph } from "../../interfaces/QSGraphs";
import options from "./DefaultGraphConfig";

class QsChart {
  private _ctx: HTMLCanvasElement;
  private _chart: QsGraph;
  private _labels: Array<XAxis>;
  private _data: Array<YAxis>;

  constructor(
    chart: QsGraph,
    labels: Array<XAxis>,
    data: Array<YAxis>,
    ctx: HTMLCanvasElement
  ) {
    this._ctx = ctx;
    this._chart = chart;
    this._labels = labels;
    this._data = data;
  }

  generateChart() {
    let dataSet = [
      new DataSet({
        label: this._chart.label,
        data: this._data,
        type: this._chart.type,
      }),
    ];

    const config = {
      data: {
        labels: this._labels,
        datasets: dataSet,
      },
      options: options,
    } as unknown as ChartConfiguration;

    return new Chart(this._ctx, config);
  }
}

export default QsChart;

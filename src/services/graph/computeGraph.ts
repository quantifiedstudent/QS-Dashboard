import Chart, { ChartConfiguration } from "chart.js/auto";

import { DataSet } from "@Interfaces/graph/Graph";
import { GraphObject, XAxis, YAxis } from "@Interfaces/graph/GraphAxis";
import options from "@Services/graph/DefaultGraphConfig";

class QsChart {
  private _ctx: HTMLCanvasElement;
  private _charts: Array<GraphObject>;
  private _labels: Array<XAxis>;
  private _colors: Array<string>;

  constructor(
    charts: Array<GraphObject>,
    labels: Array<XAxis>,
    ctx: HTMLCanvasElement
  ) {
    this._ctx = ctx;
    this._charts = charts;
    this._labels = labels;

    this._colors = [
      "rgb(0, 0, 255)",
      "rgb(0, 255, 0)",
      "rgb(255, 153, 51)",
      "rgb(204, 51, 255)",
    ];
  }

  generateChart() {
    let dataSets = new Array<DataSet>();

    this._charts.forEach((chart) => {
      dataSets.push(
        new DataSet({
          label: chart.graph.label,
          data: chart.data,
          type: chart.graph.type,
        })
      );
    });

    if (dataSets.length > 1) {
      dataSets.forEach((value, i) => {
        value.borderColor = this._colors[i];
      });
    }

    const CONFIG = {
      data: {
        labels: this._labels,
        datasets: dataSets,
      },
      options: options,
    } as unknown as ChartConfiguration;

    return new Chart(this._ctx, CONFIG);
  }
}

export default QsChart;

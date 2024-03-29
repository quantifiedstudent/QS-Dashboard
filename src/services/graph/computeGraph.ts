import Chart, { ChartConfiguration } from "chart.js/auto";

import { DataSet } from "@Services/graph/DatasetDefinition";
import { GraphObject, XAxis } from "@Services/graph/GraphAxis";
import options from "@Services/graph/DefaultGraphConfig";

class QsChart {
  private _ctx: CanvasRenderingContext2D;
  private _charts: Array<GraphObject>;
  private _labels: Array<XAxis>;
  private _colors: Array<string>;

  constructor(
    charts: Array<GraphObject>,
    labels: Array<XAxis>,
    ctx: CanvasRenderingContext2D
  ) {
    this._ctx = ctx;
    this._charts = charts;
    this._labels = labels;

    this._colors = [
      "rgb(255, 179, 179)",
      "rgb(255, 219, 164)",
      "rgb(255, 233, 174)",
      "rgb(193, 239, 255)",
    ];
  }

  generateChart() {
    let dataSets = new Array<DataSet>();

    this._charts.forEach((chart) => {
      dataSets.push(
        new DataSet({
          label: "test",
          data: chart.data,
        })
      );
    });

    if (dataSets.length > 1) {
      dataSets.forEach((value, i) => {
        value.borderColor = this._colors[i];
        value.backgroundColor = this._colors[i];
      });
    }

    const CONFIG: ChartConfiguration = {
      data: {
        labels: this._labels,
        datasets: dataSets,
      },
      options: {
        ...options,
        plugins: {
          legend: {
            display: dataSets.length > 1,
          },
        },
      },
    } as unknown as ChartConfiguration;

    return new Chart(this._ctx, CONFIG);
  }
}

export default QsChart;

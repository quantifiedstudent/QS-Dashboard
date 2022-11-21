import { DataPoint, XAxis, YAxis } from "@Services/graph/GraphAxis";
import QS_API from "@Services/api/WebApi";

export class ApiRequest<T extends DataPoint> {
  #endpoint: string;

  constructor(endpoint: string) {
    this.#endpoint = endpoint;
  }

  private async extract(data: Array<T>): Promise<any> {
    let labels: Array<XAxis> = [];
    let datapoints: Array<YAxis> = [];
    data.forEach(({ x, y }) => {
      labels.push(x);
      datapoints.push(y);
    });

    return [labels, datapoints];
  }

  async getData() {
    return await QS_API.get(this.#endpoint).then((res) =>
      this.extract(res.data)
    );
  }
}

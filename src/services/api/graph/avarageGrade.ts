import { XAxis, YAxis } from "@Services/graph/GraphAxis";
import QS_API from "../WebApi";

export async function fetchAvarageGrade(): Promise<any> {
  const mockValue = [
    {
      y: 1,
      x: "05-10-2022",
    },
    {
      y: 8,
      x: "05-10-2022",
    },
    {
      y: 7.5,
      x: "05-10-2022",
    },
    {
      y: 9,
      x: "05-10-2022",
    },
    {
      y: 4.7,
      x: "05-10-2022",
    },
    {
      y: 7,
      x: "05-10-2022",
    },
    {
      y: 8.8,
      x: "05-10-2022",
    },
    {
      y: 7.7,
      x: "05-10-2022",
    },
    {
      y: 6.9,
      x: "05-10-2022",
    },
    {
      y: 7.2,
      x: "05-10-2022",
    },
  ];

  //   const { data } = await QS_API.get("AvarageGrade");
  const data = mockValue;

  let labels: Array<XAxis> = [];
  let datapoints: Array<YAxis> = [];
  data.forEach(({ x, y }) => {
    labels.push(x);
    datapoints.push(y);
  });

  return [labels, datapoints];
}

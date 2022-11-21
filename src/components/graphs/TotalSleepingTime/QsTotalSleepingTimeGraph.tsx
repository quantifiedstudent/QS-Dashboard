import { useEffect, useState } from "react";

import { TotalGraph, TotalGraphShape } from "@Services/graph/dto/TotalGraph";
import BaseTotalGraph from "../base/baseTotalGraph";
import { totalSleepingTime } from "./store";

const QsTotalSleepingTime = (): JSX.Element => {
  const [graphData, setGraphData] = useState<TotalGraphShape>(
    new TotalGraph({ total: 0 })
  );

  useEffect(() => {
    const fetchGraphData = async () => {
      const data = await totalSleepingTime();
      setGraphData(data);
    };

    fetchGraphData();
  }, []);

  return <BaseTotalGraph total={graphData.total} />;
};

export default QsTotalSleepingTime;

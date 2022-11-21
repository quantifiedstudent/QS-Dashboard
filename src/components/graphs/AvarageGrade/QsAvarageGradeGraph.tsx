import { useEffect, useState } from "react";

import { GraphObject } from "@Services/graph/GraphAxis";
import { ApiRequest } from "@Services/api/ExtractData";
import BaseLineGraph from "../base/BaseLineGraph";

const AvarageGradeGraph = () => {
  const [State, SetState] = useState<GraphObject>({ labels: [], data: [] });

  useEffect(() => {
    const fetchGraphData = async () => {
      const [LABELS, DATA] = await new ApiRequest("AvarageGrade").getData();

      SetState({
        labels: LABELS,
        data: DATA,
      });
    };

    fetchGraphData();
  }, []);

  return <BaseLineGraph chartData={[State]} />;
};

export default AvarageGradeGraph;

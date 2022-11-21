import { useEffect, useState } from "react";

import { GraphObject } from "@Services/graph/GraphAxis";
import BaseLineGraph from "../base/BaseLineGraph";
import { fetchAvarageGrade } from "@Services/api/graph/avarageGrade";

const AvarageGradeGraph = () => {
  const [State, SetState] = useState<GraphObject>({ labels: [], data: [] });

  useEffect(() => {
    const fetchGraphData = async () => {
      const [LABELS, DATA] = await fetchAvarageGrade();

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

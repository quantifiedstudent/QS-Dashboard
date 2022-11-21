import { fetchTotalTimeSpentAtSchool } from "@Services/api/graph/totalTimeAtSchool";

export async function TotalTimeSpentAtSchool() {
  const { data } = await fetchTotalTimeSpentAtSchool();

  return data;
}

import { fetchTotalSleepingTime } from "@Services/api/graph/totalSleepingTime";

export async function totalSleepingTime() {
  const { data } = await fetchTotalSleepingTime();

  return data;
}

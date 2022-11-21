import QS_API from "../WebApi";

export async function fetchTotalSleepingTime() {
  return await QS_API.get("TotalSleepingTime");
}

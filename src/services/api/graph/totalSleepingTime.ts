import QS_API from "../WebApi";

export async function fetchTotalSleepingTime() {
  const mockValue = {
    total: 6.9,
  };

  return { data: mockValue };

  // return await QS_API.get("TotalSleepingTime");
}

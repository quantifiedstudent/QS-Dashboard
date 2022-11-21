import QS_API from "../WebApi";

export async function fetchTotalTimeSpentAtSchool() {
  const mockValue = {
    total: 38.5,
  };

  return { data: mockValue };

  // return await QS_API.get("TotalTimeAtSchool");
}

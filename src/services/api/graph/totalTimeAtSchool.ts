import QS_API from "../WebApi";

export async function fetchTotalTimeSpentAtSchool() {
  return await QS_API.get("TotalTimeAtSchool");
}

import QS_API from "../WebApi";

export async function fetchOngoingCourses() {
  // const mockValue = {
  //   submitted: 10,
  //   notSubmitted: 13,
  // };

  // return { data: mockValue };

  return await QS_API.get("OngoingCourses");
}

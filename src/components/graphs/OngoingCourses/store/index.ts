import { fetchOngoingCourses } from "@Services/api/graph/ongoingCourse";
import { OngoingCourseShape } from "@Services/graph/dto/OngoingCourse";

export async function ongoingCourse(): Promise<OngoingCourseShape> {
  const { data } = await fetchOngoingCourses();

  return data;
}

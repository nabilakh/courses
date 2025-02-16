import { listCourses } from "@/app/dummy";
import Detail from "@/components/Detail";

export async function generateStaticParams() {
  return listCourses.map((course) => ({ id: course.id.toString() }));
}

export default function DetailPage() {
  return <Detail />;
}

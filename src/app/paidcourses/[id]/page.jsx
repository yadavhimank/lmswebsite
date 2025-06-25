import { notFound } from "next/navigation";
import { getCourseById } from "@/lib/courses-data";
import CourseDetailClient from "./course-detail-client";

export default async function CoursePage({ params }) {
  const { id } = await params;
  const course = getCourseById(Number.parseInt(id));

  if (!course) {
    notFound();
  }

  return <CourseDetailClient course={course} />;
}

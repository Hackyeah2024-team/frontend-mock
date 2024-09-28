import { DatePicker } from "@/components/common/DatePicker";
import Timetable from "@/components/student/Timetable";

export default function TeacherTimetable() {
  return (
    <article className="flex flex-col p-6">
      <section className="mb-6">
        <DatePicker />
      </section>
      <Timetable week={new Date("21-09-2024")} isTeacher={true} />
    </article>
  );
}

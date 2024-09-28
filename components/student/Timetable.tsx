"use client";

import { useQuery } from "@tanstack/react-query";
import TimetableSubject from "./TimetableSubject";
import { TooltipProvider } from "../ui/tooltip";

// eslint-disable-next-line
async function fetchTimetable(week: Date): Promise<any> {
  return {
    monday: [
      { id: "maths", hours: "8:00 - 8:45" },
      { id: "physics", hours: "9:00 - 9:45" },
      {
        id: "physics",
        hours: "9:55 - 10:40",
        events: [{ kind: "test", topic: "Astronomia" }],
      },
      { id: "literature", hours: "10:50 - 11:35" },
      { id: "history", hours: "11:40 - 12:25" },
    ],
    tuesday: [
      { id: "chemistry", hours: "8:00 - 8:45" },
      { id: "biology", hours: "9:00 - 9:45" },
      {
        id: "history",
        hours: "10:00 - 10:45",
      },
      { id: "maths", hours: "11:00 - 11:45" },
      { id: "geography", hours: "12:00 - 12:45" },
      { id: "art", hours: "13:00 - 13:45" },
    ],
    wednesday: [
      { id: "literature", hours: "8:00 - 8:45" },
      { id: "maths", hours: "9:00 - 9:45" },
      { id: "physics", hours: "10:00 - 10:45" },
      { id: "music", hours: "11:00 - 11:45" },
      { id: "PE", hours: "12:00 - 12:45" },
    ],
    thursday: [
      { id: "chemistry", hours: "8:00 - 8:45" },
      {
        id: "history",
        hours: "9:00 - 9:45",
        events: [
          { kind: "quiz", topic: "WWI" },
          { kind: "quiz", topic: "WWII" },
        ],
      },
      { id: "literature", hours: "10:00 - 10:45" },
      { id: "geography", hours: "11:00 - 11:45" },
      { id: "maths", hours: "12:00 - 12:45" },
      { id: "art", hours: "13:00 - 13:45" },
    ],
    friday: [
      { id: "physics", hours: "8:00 - 8:45" },
      { id: "biology", hours: "9:00 - 9:45" },
      { id: "music", hours: "10:00 - 10:45" },
      { id: "PE", hours: "11:00 - 11:45" },
      { id: "chemistry", hours: "12:00 - 12:45" },
      { id: "history", hours: "13:00 - 13:45" },
    ],
  };
}

export default function Timetable({
  week,
}: Readonly<{
  week: Date;
}>) {
  const { isLoading, data: timetable } = useQuery({
    queryKey: [],
    queryFn: () => fetchTimetable(week),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <TooltipProvider>
      <section className="flex flex-row gap-x-4">
        {["monday", "tuesday", "wednesday", "thursday", "friday"].map(
          (dayId) => (
            <section key={dayId} className="flex flex-1 flex-col gap-y-2">
              <h1 className="bg-primary rounded-md px-3 py-2 font-bold w-full text-center">
                {dayId[0].toUpperCase() + dayId.substring(1)}
              </h1>
              {/* @ts-expect-error subj is any type */}
              {timetable[dayId].map((subj, idx) => (
                <TimetableSubject
                  key={idx}
                  subject={subj.id}
                  hours={subj.hours}
                  events={subj.events}
                />
              ))}
            </section>
          ),
        )}
      </section>
    </TooltipProvider>
  );
}

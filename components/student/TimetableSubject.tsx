import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export const SUBJECTS = {
  maths: { title: "Matematyka", color: "#A2308B" },
  physics: { title: "Fizyka", color: "#B61468" },
  literature: { title: "J. Polski", color: "#FF5722" },
  history: { title: "Historia", color: "#17399A" },
  chemistry: { title: "Chemia", color: "#17399A" },
  geography: { title: "Geografia", color: "#17399A" },
  biology: { title: "Biologia", color: "#17399A" },
  art: { title: "Plastyka", color: "#17399A" },
  PE: { title: "WF", color: "#17399A" },
  music: { title: "Muzyka", color: "#17399A" },
};

export default function TimetableSubject({
  subject,
  hours,
  events = [],
  class_,
}: Readonly<{
  subject: keyof typeof SUBJECTS;
  hours: string;
  events?: { kind: "test" | "quiz"; topic: string }[];
  class_?: string;
}>) {
  const sub = SUBJECTS[subject];
  return (
    <article className="flex flex-row gap-x-1">
      <div className="flex flex-col rounded-md px-3 py-2 border flex-1">
        <h1 className="font-bold text-nowrap overflow-hidden truncate">
          {sub.title}{" "}
          {class_ !== undefined ? (
            <span className="font-light text-muted-foreground">{class_}</span>
          ) : (
            <></>
          )}
        </h1>
        <p className="text-muted-foreground text-sm">{hours}</p>
      </div>

      {events.length > 0 ? (
        <section className="flex flex-col gap-y-1 min-w-16 w-1/3">
          {events.map((event, idx) => (
            <Tooltip key={idx}>
              <TooltipTrigger className="flex-1">
                <p className="bg-secondary text-black rounded-md px-2 py-1 h-full text-center cursor-pointer overflow-hidden truncate">
                  {event.kind === "test" ? "sprawdzian" : "kartkówka"}
                </p>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-bold text-white">{event.topic}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </section>
      ) : (
        <></>
      )}
    </article>
  );
}

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";

interface Type {
  desc: string;
  weight: number;
  date: string;
}

interface Grade {
  grade: number;
  desc: string;
  semester: string;
  type: Type;
}

export default function GradeDetails({
  grade,
  teacher,
  subject,
}: Readonly<{
  grade: Grade;
  teacher: string;
  subject: string;
}>) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Badge className="bg-primary cursor-pointer" variant="outline">
          {grade.grade}
        </Badge>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div>
              <Badge
                className="bg-primary text-2xl float-left mr-2"
                variant="outline"
              >
                {grade.grade}
              </Badge>
              <div>
                <p className="text-muted-foreground text-sm">
                  {grade.type.desc}
                </p>
                <p>{grade.desc}</p>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-2 py-4">
          <p>
            <span className="font-bold">Przedmiot</span>: {subject}
          </p>
          <p>
            <span className="font-bold">Nauczyciel</span>: {teacher}
          </p>
          <p>
            <span className="font-bold">Opis</span>: Sprawdzian dotyczący
            kluczowych wydarzeń rewolucji przemysłowej w ramach historii
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

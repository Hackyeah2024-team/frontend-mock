import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

import GradeDetails from "../student/GradeDetails";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Grade from "../student/GradeDetails"

export default function StudentsTable({data} : {data: {grade: Grade, teacher: string, subject: string, student: string, problem: string}[]}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="max-w-12">Imię i nazwisko</TableHead>
          <TableHead>Oceny</TableHead>
          <TableHead className="max-w-12">Problemy</TableHead>
          <TableHead className="max-w-8">Średnia</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      {data.map(({grade, teacher, subject, student, problem},i) => (
        <TableRow key={i}>
            <TableCell className="font-medium max-w-12">{student}</TableCell>
            <TableCell className="font-medium text-center flex gap-1 justify-start flex-wrap">
              <GradeDetails
                grade={grade}
                teacher={teacher}
                subject={subject}
              />
            </TableCell>
            <TableCell className="max-w-12">
              <div className="flex flex-row items-center gap-x-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Badge className="bg-muted cursor-pointer">{problem}</Badge>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <h1>{problem}</h1>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-2 py-4">
                    <p>
                      <span className="font-bold">Opis problemu</span>: Uczniowie mają problem z obliczaniem delty i stosowaniem wzoru na pierwiastki. Często popełniają błędy w wyborze metody rozwiązywania i w obliczeniach.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
                {grade.grade <= 4 ? <Badge className="bg-primary">+1</Badge>:""}
              </div>
            </TableCell>
            <TableCell className="text-center max-w-8">-</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
                <Badge className="bg-muted">{problem}</Badge>
                {grade.grade <= 4 ? <Badge className="bg-primary">+1</Badge>:""}
              </div>
            </TableCell>
            <TableCell className="text-center max-w-8">{grade.grade}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

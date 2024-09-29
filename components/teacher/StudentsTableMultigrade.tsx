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

function getAvg(grades: Array<Grade>) {
  var sum = 0;
  for (var i = 0; i < grades.length; i++) {
    sum += grades[i].grade;
  }
  return sum / grades.length;
}

export default function StudentsTableMultigrade({data} : {data: {grades: Array<Grade>, teacher: string, subject: string, student: string, problem: string}[]}) {
  var tmp = 0;
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
      {data.map(({grades, teacher, subject, student, problem},i) => (
        <TableRow key={i}>
            <TableCell className="font-medium max-w-12">{student}</TableCell>
            <TableCell className="font-medium text-center flex gap-1 justify-start flex-wrap">
              {grades.map((grade, idx) => (
                <GradeDetails
                  key={idx}
                  grade={grade}
                  teacher={teacher}
                  subject={subject}
                />
              ))}
            </TableCell>
            <TableCell className="max-w-12">
              <div className="flex flex-row items-center gap-x-2">
                <Badge className="bg-muted">{problem}</Badge>
              </div>
            </TableCell>
            <TableCell className="text-center max-w-8"><p>{getAvg(grades)}</p></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

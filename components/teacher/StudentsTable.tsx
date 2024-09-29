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

export default function StudentsTable() {
  return (
    <Table>
      <TableCaption>Uczniowie</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="max-w-12">Imię i nazwisko</TableHead>
          <TableHead>Oceny</TableHead>
          <TableHead className="max-w-12">Problemy</TableHead>
          <TableHead className="max-w-8">Średnia</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium max-w-12">Adam Kowalski</TableCell>
          <TableCell className="font-medium text-center flex gap-1 justify-start flex-wrap">
            <GradeDetails
              grade={{
                grade: 2,
                desc: "Ocena śródroczna",
                semester: "IR",
                type: {
                  desc: "ocena śródroczna",
                  weight: 3,
                  date: "2024-12-22T15:00:00",
                },
              }}
              teacher="Andrzej Górny"
              subject="Historia"
            />
          </TableCell>
          <TableCell className="max-w-12">
            <div className="flex flex-row items-center gap-x-2">
              <Badge className="bg-muted">Rewolucja...</Badge>
              <Badge>+2</Badge>
            </div>
          </TableCell>
          <TableCell className="text-center max-w-8">-</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

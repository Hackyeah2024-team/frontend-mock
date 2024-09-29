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
import { Grade } from "../student/GradeDetails"

interface Problem{
  problem: string
  problemDesc: string
  problemCause: Array<string>
}

function n(n: Problem){
  if(n == null){
    return 1
  }else if(n.problemCause == null){
    return 1
  }
  return 0
}

export default function StudentsTable({data} : {data: {student: string, gradeData: {grade: Grade, teacher: string, subject: string}[], problem: Problem}[]}) {

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
      {data.map(({gradeData, student, problem},i) => (
        <TableRow key={i}>
            <TableCell className="font-medium max-w-12">{student}</TableCell>
            <TableCell className="font-medium text-center flex gap-1 justify-start flex-wrap">
              {gradeData.map(({grade,teacher,subject},idx) => (
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
                {n(problem)?null:
                <Dialog>
                <DialogTrigger asChild>
                  <Badge className="bg-muted cursor-pointer">{problem.problem}</Badge>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <h1>{problem.problem}</h1>
                    </DialogTitle>

                  </DialogHeader>
                  <div className="grid gap-2 py-4">
                    <p>
                      <span className="font-bold">Opis problemu:</span><p/>{problem['problemDesc']}
                    </p>
                  </div>
                    {Array.from({ length: problem.problemCause.length }).map((e, idx)  => (
                      
                <li
                  key={idx}
                  className="grid grid-cols-[25px_1fr] items-start mb-2"
                >
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-primary" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none flex flex-row items-center">{problem.problemCause[idx]}</p>
                  </div>
                </li>
              ))}
                  

                </DialogContent>
              </Dialog>
            }
                {/* <Badge className="bg-primary">+1</Badge> */}
              </div>
            </TableCell>
            <TableCell className="text-center max-w-8"></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { Badge } from "@/components/ui/badge"
  
  const subjects = [
    {
      "name": "Matematyka",
      "teacher": "Colin Scy",
      "grades": [
        {
          "grade": 6,
          "desc": "Test z tabliczki mnożenia",
          "semester": "1",
          "type": {
            "desc": "kartkówka",
            "weight": 1,
            "date": "2024-09-21T18:25:43"
          }
        },
        {
            "grade": 5,
            "desc": "Test z tabliczki mnożenia",
            "semester": "1",
            "type": {
              "desc": "kartkówka",
              "weight": 2,
              "date": "2024-09-21T18:25:43"
            }
          },
          {
            "grade": 5,
            "desc": "Test z tabliczki mnożenia",
            "semester": "1",
            "type": {
              "desc": "kartkówka",
              "weight": 2,
              "date": "2024-09-21T18:25:43"
            }
          },
          {
            "grade": 5,
            "desc": "Test z tabliczki mnożenia",
            "semester": "1",
            "type": {
              "desc": "kartkówka",
              "weight": 2,
              "date": "2024-09-21T18:25:43"
            }
          },
          {
            "grade": 5,
            "desc": "Test z tabliczki mnożenia",
            "semester": "1",
            "type": {
              "desc": "kartkówka",
              "weight": 2,
              "date": "2024-09-21T18:25:43"
            }
          },
          {
            "grade": 5,
            "desc": "Test z tabliczki mnożenia",
            "semester": "1",
            "type": {
              "desc": "kartkówka",
              "weight": 2,
              "date": "2024-09-21T18:25:43"
            }
          },
          {
            "grade": 5,
            "desc": "Test z tabliczki mnożenia",
            "semester": "1",
            "type": {
              "desc": "kartkówka",
              "weight": 2,
              "date": "2024-09-21T18:25:43"
            }
          },
          {
            "grade": 1,
            "desc": "Test z tabliczki mnożenia",
            "semester": "1",
            "type": {
              "desc": "kartkówka",
              "weight": 2,
              "date": "2024-09-21T18:25:43"
            }
          },
          {
            "grade": 3,
            "desc": "Test z tabliczki mnożenia",
            "semester": "1",
            "type": {
              "desc": "kartkówka",
              "weight": 2,
              "date": "2024-09-21T18:25:43"
            }
          },
        {
          "grade": 5,
          "desc": "Sprawdzian z funkcji kwadratowej",
          "semester": "2",
          "type": {
            "desc": "sprawdzian",
            "weight": 2,
            "date": "2025-02-10T10:00:00"
          }
        },
        {
          "grade": 6,
          "desc": "Ocena śródroczna",
          "semester": "IR",
          "type": {
            "desc": "ocena śródroczna",
            "weight": 3,
            "date": "2024-12-15T09:00:00"
          }
        },
        {
          "grade": 5,
          "desc": "Ocena roczna",
          "semester": "R",
          "type": {
            "desc": "ocena roczna",
            "weight": 4,
            "date": "2025-06-20T12:00:00"
          }
        }
      ]
    },
    {
      "name": "Biologia",
      "teacher": "Anna Nowak",
      "grades": [
        {
          "grade": 4,
          "desc": "Test z fotosyntezy",
          "semester": "1",
          "type": {
            "desc": "test",
            "weight": 2,
            "date": "2024-10-01T09:30:00"
          }
        },
        {
          "grade": 6,
          "desc": "Prezentacja o ekosystemach",
          "semester": "2",
          "type": {
            "desc": "prezentacja",
            "weight": 1,
            "date": "2025-03-15T11:00:00"
          }
        },
        {
          "grade": 5,
          "desc": "Ocena śródroczna",
          "semester": "IR",
          "type": {
            "desc": "ocena śródroczna",
            "weight": 3,
            "date": "2024-12-18T10:30:00"
          }
        },
        {
          "grade": 6,
          "desc": "Ocena roczna",
          "semester": "R",
          "type": {
            "desc": "ocena roczna",
            "weight": 4,
            "date": "2025-06-22T13:00:00"
          }
        }
      ]
    },
    {
      "name": "Fizyka",
      "teacher": "Richard Thorn",
      "grades": [
        {
          "grade": 5,
          "desc": "Sprawdzian z dynamiki",
          "semester": "1",
          "type": {
            "desc": "sprawdzian",
            "weight": 2,
            "date": "2024-09-25T10:00:00"
          }
        },
        {
          "grade": 4,
          "desc": "Projekt o falach elektromagnetycznych",
          "semester": "2",
          "type": {
            "desc": "projekt",
            "weight": 3,
            "date": "2025-02-28T14:00:00"
          }
        },
        {
          "grade": 5,
          "desc": "Ocena śródroczna",
          "semester": "IR",
          "type": {
            "desc": "ocena śródroczna",
            "weight": 3,
            "date": "2024-12-20T11:00:00"
          }
        },
        {
          "grade": 6,
          "desc": "Ocena roczna",
          "semester": "R",
          "type": {
            "desc": "ocena roczna",
            "weight": 4,
            "date": "2025-06-18T10:45:00"
          }
        }
      ]
    },
    {
      "name": "Historia",
      "teacher": "Mary Black",
      "grades": [
        {
          "grade": 6,
          "desc": "Test z rewolucji przemysłowej",
          "semester": "1",
          "type": {
            "desc": "test",
            "weight": 2,
            "date": "2024-10-05T12:00:00"
          }
        },
        {
          "grade": 5,
          "desc": "Projekt o II wojnie światowej",
          "semester": "2",
          "type": {
            "desc": "projekt",
            "weight": 3,
            "date": "2025-04-10T14:00:00"
          }
        },
        {
          "grade": 5,
          "desc": "Ocena śródroczna",
          "semester": "IR",
          "type": {
            "desc": "ocena śródroczna",
            "weight": 3,
            "date": "2024-12-22T15:00:00"
          }
        },
        {
          "grade": 6,
          "desc": "Ocena roczna",
          "semester": "R",
          "type": {
            "desc": "ocena roczna",
            "weight": 4,
            "date": "2025-06-21T09:30:00"
          }
        }
      ]
    }
  ];
  
  export function Grades() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead rowSpan={2} className="w-[100px]">Przedmiot</TableHead>
            <TableHead colSpan={3} className="text-center">Semestr I</TableHead>
            <TableHead colSpan={2} className="text-center">Semestr II</TableHead>
            <TableHead colSpan={2} className="text-center">Koniec roku</TableHead>
          </TableRow>
          <TableRow>
            <TableHead className="text-center">Oceny bieżące I</TableHead>
            <TableHead className="text-center">Śr.I</TableHead>
            <TableHead className="text-center">I</TableHead>
            <TableHead className="text-center">Oceny bieżące II</TableHead>
            <TableHead className="text-center">Śr.II</TableHead>
            <TableHead className="text-center">Śr.R</TableHead>
            <TableHead className="text-center">R</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subjects.map((subject, idx) =>
            <TableRow key={idx}>
              <TableCell className="font-medium text-center border-r-2">{subject.name}</TableCell>
              <TableCell className="font-medium text-center flex gap-1 justify-start flex-wrap">
                {subject.grades.filter(grade => grade.semester == "1").map((grade, idx) => (
                    <TooltipProvider key={idx}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Badge className="bg-primary" variant="outline">{grade.grade}</Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                                <div className="p-2">
                                    <p>Tytuł: {grade.desc}</p>
                                    <p>Opis: {grade.type.desc}</p>
                                    <p>Waga: {grade.type.weight}</p>
                                    <p>Data: {new Date(grade.type.date).toLocaleString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric'})}</p>
                                </div>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider> 
                ))}
              </TableCell>
              <TableCell className="font-medium text-center">
                <Badge className="bg-primary mx-1" variant="outline">{subject.grades.filter(grade => grade.semester == "1").reduce((acc, item) => [acc[0] + item.grade * item.type.weight, acc[1] + item.type.weight], [0, 0]).reduce((sum, weight) => sum / weight).toFixed(2)}</Badge>
              </TableCell>
              <TableCell className="font-medium text-center border-r-2">
                {subject.grades.filter(grade => grade.semester == "IR").map(midgrade =>
                    <Badge className="bg-secondary mx-1" variant="outline">{midgrade.grade}</Badge>
                )}
              </TableCell>
              <TableCell className="font-medium text-center flex gap-1 justify-start flex-wrap">
                {subject.grades.filter(grade => grade.semester == "2").map(grade => (
                    <TooltipProvider key={idx}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Badge className="bg-primary" variant="outline">{grade.grade}</Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                            <div className="p-2">
                                <p>Tytuł: {grade.desc}</p>
                                <p>Opis: {grade.type.desc}</p>
                                <p>Waga: {grade.type.weight}</p>
                                <p>Data: {new Date(grade.type.date).toLocaleString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric'})}</p>
                            </div>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider> 
                ))}
              </TableCell>
              <TableCell className="font-medium text-center border-r-2">
                <Badge className="bg-primary mx-1" variant="outline">{subject.grades.filter(grade => grade.semester == "2").reduce((acc, item) => [acc[0] + item.grade * item.type.weight, acc[1] + item.type.weight], [0, 0]).reduce((sum, weight) => sum / weight).toFixed(2)}</Badge>
              </TableCell>
              <TableCell className="text-center">
                <Badge className="bg-primary mx-1" variant="outline">{subject.grades.filter(grade => grade.semester != "IR" && grade.semester != "R").reduce((acc, item) => [acc[0] + item.grade * item.type.weight, acc[1] + item.type.weight], [0, 0]).reduce((sum, weight) => sum / weight).toFixed(2)}</Badge>
              </TableCell>
              <TableCell className="text-center">
                {subject.grades.filter(grade => grade.semester == "R").map(endgrade =>
                    <Badge className="bg-secondary mx-1" variant="outline">{endgrade.grade}</Badge>
                )}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    )
  }
  
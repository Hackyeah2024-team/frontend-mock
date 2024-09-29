import StudentsTable, {
  GradeData,
  Problem,
} from "@/components/teacher/StudentsTable";

export default function ClassView({ params }: { params: { id: string } }) {
  const class_data = fetchClassData(params.id)["students"].map(
    (
      student: any,
    ): { student: string; gradeData: GradeData[]; problem: Problem } => {
      return {
        student: student.student,
        gradeData: student.grades.map((grade: any) => {
          return { grade };
        }),
        problem: student.problem,
      };
    },
  );

  return <StudentsTable data={class_data} />;
}

function fetchClassData(cid: string) {
  const classValz = {
    "1A": {
      teacher: "Piotr Lubczyk",
      students: [
        {
          student: "Anna Kowalczyk",
          problem: {
            problem: "Trygonometria",
            problemDesc:
              "U ucznia występują problemy z transformowaniem wzorów trygonometrycznych",
            problemCause: ["Ocena z sprawdzianu poniżej średniej"],
          },
          grades: [
            {
              grade: 4,
              desc: "Projekt",
              semester: "I",
              type: {
                desc: "projekt",
                weight: 3,
                date: "2024-01-15T12:00:00",
              },
            },
            {
              grade: 4,
              desc: "Egzamin semestralny",
              semester: "II",
              type: {
                desc: "egzamin semestralny",
                weight: 5,
                date: "2024-06-05T09:00:00",
              },
            },
          ],
        },
        {
          student: "Marek Zieliński",
          problem: {
            problem: "Równanie kwadratowe",
            problemDesc:
              "U ucznia występują problemy z rownaniami kwadratowymi",
            problemCause: [
              "niskie wyniki z zadań zawierających równania kwadratowe",
            ],
          },
          grades: [
            {
              grade: 3,
              desc: "Projekt",
              semester: "I",
              type: {
                desc: "projekt",
                weight: 3,
                date: "2024-01-12T10:00:00",
              },
            },
            {
              grade: 5,
              desc: "Kartkówka",
              semester: "I",
              type: {
                desc: "kartkówka",
                weight: 2,
                date: "2024-03-01T09:00:00",
              },
            },
          ],
        },
        {
          student: "Kasia Wójcik",
          grades: [
            {
              grade: 5,
              desc: "Egzamin semestralny",
              semester: "II",
              type: {
                desc: "egzamin semestralny",
                weight: 5,
                date: "2024-06-05T09:00:00",
              },
            },
            {
              grade: 4,
              desc: "Praca domowa",
              semester: "I",
              type: {
                desc: "praca domowa",
                weight: 1,
                date: "2024-02-05T14:00:00",
              },
            },
            {
              grade: 3,
              desc: "Test",
              semester: "II",
              type: {
                desc: "test",
                weight: 4,
                date: "2024-05-20T10:00:00",
              },
            },
          ],
        },
        {
          student: "Jakub Nowakowski",
          problem: {
            problem: "Geometria",
            problemDesc: "U ucznia występują problemy z geometrią",
            problemCause: [
              "ocena ze sprawdzianu poniżej średniej",
              "nieobecność na kartkówce",
            ],
          },
          grades: [
            {
              grade: 2,
              desc: "Projekt",
              semester: "I",
              type: {
                desc: "projekt",
                weight: 3,
                date: "2024-01-20T10:30:00",
              },
            },
            {
              grade: 3,
              desc: "Praca domowa",
              semester: "I",
              type: {
                desc: "praca domowa",
                weight: 1,
                date: "2024-02-12T11:00:00",
              },
            },
          ],
        },
        {
          student: "Ola Kaczmarek",
          grades: [
            {
              grade: 4,
              desc: "Kartkówka",
              semester: "I",
              type: {
                desc: "kartkówka",
                weight: 2,
                date: "2024-03-15T12:00:00",
              },
            },
            {
              grade: 5,
              desc: "Test",
              semester: "II",
              type: {
                desc: "test",
                weight: 4,
                date: "2024-05-10T09:00:00",
              },
            },
          ],
        },
      ],
    },
    "1B": {
      teacher: "Natalia Kowalczyk",
      students: [
        {
          student: "Tomasz Pawlak",
          grades: [
            {
              grade: 3,
              desc: "Projekt",
              semester: "I",
              type: {
                desc: "projekt",
                weight: 3,
                date: "2024-01-18T10:00:00",
              },
            },
            {
              grade: 4,
              desc: "Kartkówka",
              semester: "I",
              type: {
                desc: "kartkówka",
                weight: 2,
                date: "2024-03-12T09:00:00",
              },
            },
          ],
        },
        {
          student: "Natalia Wiśniewska",
          grades: [
            {
              grade: 5,
              desc: "Egzamin semestralny",
              semester: "II",
              type: {
                desc: "egzamin semestralny",
                weight: 5,
                date: "2024-06-05T09:00:00",
              },
            },
            {
              grade: 4,
              desc: "Praca domowa",
              semester: "I",
              type: {
                desc: "praca domowa",
                weight: 1,
                date: "2024-02-15T13:00:00",
              },
            },
          ],
        },
        {
          student: "Krzysztof Adamczyk",
          grades: [
            {
              grade: 2,
              desc: "Projekt",
              semester: "I",
              type: {
                desc: "projekt",
                weight: 3,
                date: "2024-01-25T10:30:00",
              },
            },
            {
              grade: 3,
              desc: "Kartkówka",
              semester: "I",
              type: {
                desc: "kartkówka",
                weight: 2,
                date: "2024-03-08T11:00:00",
              },
            },
          ],
        },
        {
          student: "Aneta Nowicka",
          grades: [
            {
              grade: 4,
              desc: "Test",
              semester: "II",
              type: {
                desc: "test",
                weight: 4,
                date: "2024-05-05T09:00:00",
              },
            },
            {
              grade: 5,
              desc: "Egzamin semestralny",
              semester: "II",
              type: {
                desc: "egzamin semestralny",
                weight: 5,
                date: "2024-06-05T09:00:00",
              },
            },
          ],
        },
      ],
    },
  };

  // @ts-expect-error bo tak
  return classValz["1" + cid.toString().substring(1, 2)];
}

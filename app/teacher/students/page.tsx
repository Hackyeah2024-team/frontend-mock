import StudentsTable from "@/components/teacher/StudentsTable";

export default function TeacherStudents() {
  return (
    <div className="flex flex-col m-4">
        {<StudentsTable data={dataFetch()}/>}
    </div>
  );
}

function dataFetch(){
  return [
    {
      "grade": {
        "grade": 4,
        "desc": "Ocena końcowa",
        "semester": "II",
        "type": {
          "desc": "ocena końcowa",
          "weight": 5,
          "date": "2024-06-18T10:00:00"
        }
      },
      "teacher": "Monika Zielińska",
      "subject": "Matematyka",
      "student": "Anna Kowalczyk",
      "problem": "Równanie kwadratowe"
    },
    {
      "grade": {
        "grade": 5,
        "desc": "Sprawdzian",
        "semester": "I",
        "type": {
          "desc": "sprawdzian",
          "weight": 3,
          "date": "2024-01-15T12:00:00"
        }
      },
      "teacher": "Anna Nowak",
      "subject": "Chemia",
      "student": "Michał Wiśniewski",
      "problem": "Reakcje redoks"
    },
    {
      "grade": {
        "grade": 3,
        "desc": "Kartkówka",
        "semester": "II",
        "type": {
          "desc": "kartkówka",
          "weight": 2,
          "date": "2024-05-10T08:30:00"
        }
      },
      "teacher": "Tomasz Lewandowski",
      "subject": "Fizyka",
      "student": "Katarzyna Jabłońska",
      "problem": "Prawo Ohma"
    },
    {
      "grade": {
        "grade": 6,
        "desc": "Projekt",
        "semester": "I",
        "type": {
          "desc": "projekt",
          "weight": 4,
          "date": "2023-12-20T14:00:00"
        }
      },
      "teacher": "Katarzyna Wiśniewska",
      "subject": "Informatyka",
      "student": "Paweł Kamiński",
      "problem": "Programowanie w Pythonie"
    },
    {
      "grade": {
        "grade": 4,
        "desc": "Egzamin semestralny",
        "semester": "II",
        "type": {
          "desc": "egzamin semestralny",
          "weight": 5,
          "date": "2024-06-05T09:00:00"
        }
      },
      "teacher": "Janusz Kwiatkowski",
      "subject": "Historia",
      "student": "Zuzanna Kaczmarek",
      "problem": "II wojna światowa"
    },
    {
      "grade": {
        "grade": 5,
        "desc": "Odpowiedź ustna",
        "semester": "I",
        "type": {
          "desc": "odpowiedź ustna",
          "weight": 2,
          "date": "2024-02-02T11:00:00"
        }
      },
      "teacher": "Joanna Pawlak",
      "subject": "Biologia",
      "student": "Mateusz Wójcik",
      "problem": "Układ krążenia"
    }
]

}
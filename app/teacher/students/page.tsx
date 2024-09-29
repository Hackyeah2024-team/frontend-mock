import StudentsTable from "@/components/teacher/StudentsTable";
import { group } from "console";

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
        "student": "Adam Kowalski",
        "gradeData": [
          {
            "grade": {
              "grade": 4,
              "desc": "Projekt o minogach",
              "semester": "I",
              "type": {
                "desc": "projekt",
                "weight": 3,
                "date": "2024-01-15T12:00:00"
              }
            }
          },
          {
            "grade": {
              "grade": 5,
              "desc": "Egzamin końcowy",
              "semester": "II",
              "type": {
                "desc": "egzamin",
                "weight": 5,
                "date": "2024-06-05T10:00:00"
              }
            }
          },
          {
            "grade": {
              "grade": 3,
              "desc": "Kartkówka z geometrii",
              "semester": "I",
              "type": {
                "desc": "kartkówka",
                "weight": 2,
                "date": "2024-02-10T09:00:00"
              }
            }
          },
          {
            "grade": {
              "grade": 4,
              "desc": "Projekt z algebry",
              "semester": "I",
              "type": {
                "desc": "projekt",
                "weight": 3,
                "date": "2024-03-01T11:00:00"
              }
            }
          },
          {
            "grade": {
              "grade": 5,
              "desc": "Test z trygonometrii",
              "semester": "II",
              "type": {
                "desc": "test",
                "weight": 4,
                "date": "2024-05-12T09:30:00"
              }
            }
          },
          {
            "grade": {
              "grade": 2,
              "desc": "Praca domowa z równań kwadratowych",
              "semester": "II",
              "type": {
                "desc": "praca domowa",
                "weight": 1,
                "date": "2024-04-05T14:00:00"
              }
            }
          }
        ],
        "problem": {
          "problem": "Trygonometria",
          "problemDesc": "U ucznia występują problemy z transformowaniem wzorów trygonometrycznych",
          "problemCause": ["Ocena z sprawdzianu poniżej średniej"]
        }
      },
      {
        "student": "Piotr Nowak",
        "gradeData": [
          {
            "grade": {
              "grade": 5,
              "desc": "Prezentacja o układzie słonecznym",
              "semester": "I",
              "type": {
                "desc": "prezentacja",
                "weight": 4,
                "date": "2024-01-12T10:00:00"
              }
            }
          },
          {
            "grade": {
              "grade": 3,
              "desc": "Kartkówka z rachunku prawdopodobieństwa",
              "semester": "I",
              "type": {
                "desc": "kartkówka",
                "weight": 2,
                "date": "2024-02-15T09:00:00"
              }
            }
          },
          {
            "grade": {
              "grade": 4,
              "desc": "Projekt z fizyki kwantowej",
              "semester": "II",
              "type": {
                "desc": "projekt",
                "weight": 3,
                "date": "2024-03-20T11:30:00"
              }
            }
          },
          {
            "grade": {
              "grade": 2,
              "desc": "Praca domowa z chemii organicznej",
              "semester": "I",
              "type": {
                "desc": "praca domowa",
                "weight": 1,
                "date": "2024-04-05T14:00:00"
              }
            }
          },
          {
            "grade": {
              "grade": 5,
              "desc": "Egzamin z historii starożytnej",
              "semester": "II",
              "type": {
                "desc": "egzamin",
                "weight": 5,
                "date": "2024-06-10T09:30:00"
              }
            }
          },
          {
            "grade": {
              "grade": 4,
              "desc": "Test z biologii molekularnej",
              "semester": "II",
              "type": {
                "desc": "test",
                "weight": 4,
                "date": "2024-05-25T12:00:00"
              }
            }
          },
          {
            "grade": {
              "grade": 3,
              "desc": "Sprawdzian z algebry liniowej",
              "semester": "I",
              "type": {
                "desc": "sprawdzian",
                "weight": 3,
                "date": "2024-02-28T10:00:00"
              }
            }
          }
        ]
      },
      {
        "student": "Anna Wiśniewska",
        "gradeData": [
          {
            "grade": {
              "grade": 5,
              "desc": "Projekt z biologii",
              "semester": "II",
              "type": {
                "desc": "projekt",
                "weight": 3,
                "date": "2024-04-15T14:00:00"
              }
            }
          },
          {
            "grade": {
              "grade": 4,
              "desc": "Test z fotosyntezy",
              "semester": "II",
              "type": {
                "desc": "test",
                "weight": 4,
                "date": "2024-05-10T11:00:00"
              }
            }
          }
        ]
      },
      {
        "student": "Tomasz Zieliński",
        "gradeData": [
          {
            "grade": {
              "grade": 2,
              "desc": "Projekt o figurach geometrycznych",
              "semester": "I",
              "type": {
                "desc": "projekt",
                "weight": 3,
                "date": "2024-01-22T10:30:00"
              }
            }
          },
          {
            "grade": {
              "grade": 3,
              "desc": "Egzamin końcowy",
              "semester": "II",
              "type": {
                "desc": "egzamin",
                "weight": 5,
                "date": "2024-06-05T12:00:00"
              }
            }
          },
          {
            "grade": {
              "grade": 4,
              "desc": "Planimetria sprawdzian",
              "semester": "I",
              "type": {
                "desc": "projekt",
                "weight": 3,
                "date": "2024-01-22T10:30:00"
              }
            }
          }
        ],
        "problem": {
          "problem":"kinematyka",
          "problemDesc":"Problem z trudniejszymi zadaniami z kinematyki",
          "problemCause":["nieobecność na lekcjach", "brak pracy domowej"]
      },
    },
      {
        "student": "Zofia Kaczmarek",
        "gradeData": [
          {
            "grade": {
              "grade": 5,
              "desc": "Projekt z chemii organicznej",
              "semester": "I",
              "type": {
                "desc": "projekt",
                "weight": 3,
                "date": "2024-03-10T09:30:00"
              }
            }
          },
          {
            "grade": {
              "grade": 4,
              "desc": "Test z alkanów",
              "semester": "II",
              "type": {
                "desc": "test",
                "weight": 4,
                "date": "2024-05-15T14:00:00"
              }
            }
          },
          {
            "grade": {
              "grade": 3,
              "desc": "Sprawdzian z reakcji chemicznych",
              "semester": "I",
              "type": {
                "desc": "sprawdzian",
                "weight": 3,
                "date": "2024-02-20T11:00:00"
              }
            }
          },
          {
            "grade": {
              "grade": 5,
              "desc": "Egzamin końcowy z chemii",
              "semester": "II",
              "type": {
                "desc": "egzamin",
                "weight": 5,
                "date": "2024-06-20T09:00:00"
              }
            }
          }
        ]
      }
    ]
}
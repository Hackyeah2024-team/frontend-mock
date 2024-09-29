import TimetableSubject from "@/components/student/TimetableSubject";

import { Card, CardContent } from "@/components/ui/card";
import { ShuffleIcon } from "lucide-react";

export default function StudentHome() {
  return (
    <div>
      <div className="flex">
        <Card className="w-1/4 m-4 bg-muted/40">
          <CardContent className="flex flex-col gap-y-2">
            <h1 className="bg-primary rounded-md mt-4 my-2 px-3 py-2 font-bold w-full text-center">
              Dzisiejszy plan
            </h1>
            <TimetableSubject
              key={"no"}
              subject="literature"
              hours="8:00 - 8:45"
            />
            <TimetableSubject key={"no"} subject="maths" hours="9:00 - 9:45" />
            <TimetableSubject
              key={"no"}
              subject="physics"
              hours="10:00 - 10:45"
            />
            <TimetableSubject
              key={"no"}
              subject="music"
              hours="11:00 - 11:45"
            />
            <TimetableSubject key={"no"} subject="PE" hours="12:00 - 12:45" />
          </CardContent>
        </Card>
        <Card className="m-4 bg-muted/40 w-1/4">
          <CardContent>
            <h1 className="bg-primary rounded-md mt-4 mb-4 px-3 py-2 font-bold w-full text-center">
              Najnowsze oceny
            </h1>
            <div className="text-center flex flex-col gap-2 justify-center">
              <div className="flex items-center p-4 rounded-lg bg-muted/20 shadow-md w-full max-w-md">
                <div className="text-5xl font-bold text-white w-1/3">2</div>
                <div className="ml-4 w-2/3">
                  <p className="text-xl font-medium text-white">Fizyka</p>
                </div>
              </div>
              <div className="flex items-center p-4 rounded-lg bg-muted/20 shadow-md w-full max-w-md">
                <div className="text-5xl font-bold text-white w-1/3">5</div>
                <div className="ml-4 w-2/3">
                  <p className="text-xl font-medium text-white">J. Angielski</p>
                </div>
              </div>
              <div className="flex items-center p-4 rounded-lg bg-muted/20 shadow-md w-full max-w-md">
                <div className="text-5xl font-bold text-white w-1/3">3</div>
                <div className="ml-4 w-2/3">
                  <p className="text-xl font-medium text-white">Biologia</p>
                </div>
              </div>
              <div className="flex items-center p-4 rounded-lg bg-muted/20 shadow-md w-full max-w-md">
                <div className="text-5xl font-bold text-white w-1/3">6</div>
                <div className="ml-4 w-2/3">
                  <p className="text-xl font-medium text-white">Muzyka</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-1/3 m-4 bg-muted/40">
          <CardContent className="flex flex-col gap-y-2">
            <h1 className="bg-primary rounded-md mt-4 my-2 px-3 py-2 font-bold w-full text-center">
              Nauka
            </h1>
            <p className="text-center">
              Masz następujace sugestie dotyczące nauki:{" "}
            </p>
            <div className="flex items-center p-4 rounded-lg bg-muted/20 shadow-md w-full max-w-md">
              <a
                className="ml-4 w-2/3 flex cursor-pointer"
                href="/student/learn"
              >
                <p className="text-xl font-medium text-white mr-2">Ułamki</p>
                <ShuffleIcon className="w-4 h-4" />
              </a>
            </div>
            <div className="flex items-center p-4 rounded-lg bg-muted/20 shadow-md w-full max-w-md">
              <a
                className="ml-4 w-2/3 flex cursor-pointer"
                href="/student/learn"
              >
                <p className="text-xl font-medium text-white mr-2">Antyk</p>
                <ShuffleIcon className="w-4 h-4" />
              </a>
            </div>
            <div className="flex items-center p-4 rounded-lg bg-muted/20 shadow-md w-full max-w-md">
              <a
                className="ml-4 w-2/3 flex cursor-pointer"
                href="/student/learn"
              >
                <p className="text-xl font-medium text-white mr-2">
                  Past perfect
                </p>
                <ShuffleIcon className="w-4 h-4" />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

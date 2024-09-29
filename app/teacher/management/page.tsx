import { Button } from "@/components/ui/button"

import {Pencil,
} from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card"

export default function StudentHome()
{
  return (
    <div>
      <div className="flex justify-center">
">
        <Card className="w-1/2 m-4 bg-primary/90 ">
          <CardContent className="flex flex-col gap-y-2">
          <h1 className="bg-primary rounded-md mt-4 my-2 px-3 py-2 font-bold w-full text-center">
              Nazwa szkoły
          </h1>
          <p className="text-center">AKADEMIA HACK YEAH <Button variant="outline">{<Pencil className="w-4 h-4" />}</Button></p>
          <h1 className="bg-primary rounded-md mt-4 my-2 px-3 py-2 font-bold w-full text-center">
              Login:
          </h1>
          <p className="text-center">Marek Skoczek<Button variant="outline">{<Pencil className="w-4 h-4" />}</Button></p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function Studentbehavior() {
  return (
    <div>
      <div className="flex justify-center">
        <Card className="w-1/4 m-4 bg-muted/40">
          <CardContent className="flex flex-col gap-y-2">
            <h1 className="bg-primary rounded-md mt-4 my-2 px-3 py-2 font-bold w-full text-center">
              Ocena z zachowania:
            </h1>
            <div className="text-9xl font-bold text-white w-1/20 flex justify-center">
              <img
                src="https://images-ext-1.discordapp.net/external/Zu0p5PHBbu96K0tfqpMAaIvdt8FdgMdu4hGfOG6f1UE/https/media1.tenor.com/m/5ojH_vPM9rwAAAAd/lemur-vash.gif?width=360&height=467"
                alt="A beautiful scenery"
              ></img>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

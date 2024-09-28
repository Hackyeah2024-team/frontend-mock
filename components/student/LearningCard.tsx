import {
  BookIcon,
  GlobeIcon,
  SquareArrowOutUpRightIcon,
  YoutubeIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import React from "react";
import Link from "next/link";

export default function LearningCard({
  data,
}: Readonly<{
  data: {
    topic: string;
    reasons: { title: string; href?: string }[];
    resources: { icon: React.ReactNode; title: string; href?: string }[];
  };
}>) {
  return (
    <Card className="bg-muted/40">
      <CardHeader>
        <CardTitle className="text-xl">{data.topic}</CardTitle>
        {/*<CardDescription>Lorem ipsum</CardDescription>*/}
      </CardHeader>
      <CardContent className="flex flex-row">
        <section className="flex-1">
          <h1 className="font-bold">Powody</h1>
          <h2 className="text-sm text-muted-foreground leading-4">
            Dane na podstawie których twierdzimy, że powinienneś powtórzyć ten
            temat.
          </h2>
          <ul className="list-disc text-md font-extralight mt-4">
            {data.reasons.map((cause, idx) => (
              <li
                key={idx}
                className="grid grid-cols-[25px_1fr] items-start mb-2"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-primary" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none flex flex-row items-center">
                    {cause.title}
                    {cause.href ? (
                      <SquareArrowOutUpRightIcon className="w-3 h-3 text-muted-foreground ml-2 cursor-pointer" />
                    ) : (
                      <></>
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex-1">
          <h1 className="font-bold">Materiały</h1>
          <h2 className="text-sm text-muted-foreground leading-4">
            Źródła, które możesz wykorzystać do nauki lub powtórzenia wybranego
            tematu.
          </h2>
          <div className="flex flex-row gap-2 mt-4 flex-wrap">
            {data.resources.map((res, idx) => (
              <Link key={idx} target="_blank" href={res.href ?? "#"}>
                <Button variant="outline" className="bg-transparent">
                  {res.icon}
                  {res.title}
                </Button>
              </Link>
            ))}
          </div>
        </section>
      </CardContent>
    </Card>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

export default function StudentMessages() {
  return (
    <div className="flex flex-col m-4">
      <div className="flex flex-col gap-4">
        <MessageCard
          author="Adam Sarkowicz"
          title="Dystrybutor wody"
          content="
          Dzień dobry, w głównym holu zamontowano nowy dystrybutor wody dostępny dla uczniów"
        />
        <MessageCard
          author="Adam Sarkowicz"
          title="Dystrybutor wody"
          content="Dzień dobry, w głównym holu zamontowano nowy dystrybutor wody dostępny dla uczniów"
        />
        <MessageCard
          author="Adam Sarkowicz"
          title="Dystrybutor wody"
          content="Dzień dobry, w głównym holu zamontowano nowy dystrybutor wody dostępny dla uczniów"
        />
      </div>
      <div className="absolute right-3 bottom-2">
        <Button>Utwórz wiadomość</Button>
      </div>
    </div>
  );
}

type Message = {
  author: string;
  title: string;
  content: string;
};

function MessageCard({ author, title, content }: Message) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Card
        className="flex flex-col bg-slate-800 p-2 rounded-xl"
        onClick={() => {
          setOpened(true);
        }}
      >
        <h1 className="text-4xl">{title}</h1>
        <p className="mt-4">{author}</p>
        <p>{content.split(" ").slice(0, 5).join(" ")}...</p>
      </Card>
      <Dialog open={opened} onOpenChange={() => setOpened(false)}>
        <DialogContent className="max-w-4xl w-full min-h-[32rem] h-auto">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription className="mt-6">{content}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

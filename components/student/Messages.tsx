"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export function StudentMessageList() {
  return (
    <div className="flex flex-col gap-4">
      <MessageCard
        author="Adam Sarkowicz"
        title="Dystrybutor wody"
        content="Dzień dobry, w głównym holu zamontowano nowy dystrybutor wody dostępny dla uczniów"
      />
      <MessageCard
        author="Jan Azbeski"
        title="Zajęcia z matematyki"
        content="Przypominam, że dzisiejsze zajęcia z matematyki odbędą się w sali 205 o godzinie 10:00."
      />

      <MessageCard
        author="Anna Nowak"
        title="Ważna informacja"
        content="Informujemy, że jutro szkoła będzie zamknięta z powodu prac konserwacyjnych. Zajęcia zostaną przełożone."
      />

      <MessageCard
        author="Piotr Wiśniewski"
        title="Konsultacje nauczycielskie"
        content="Zapraszam na konsultacje w piątek o godzinie 14:00 w sali 101. Można omówić bieżące problemy z nauką."
      />

      <MessageCard
        author="Magdalena Malinowska"
        title="Konkurs języka angielskiego"
        content="Zapraszam uczniów do udziału w konkursie jzyka angielskiego, który odbędzie się 25 października."
      />

      <MessageCard
        author="Tomasz Zawadzki"
        title="Zmiana planu lekcji"
        content="Proszę o zapoznanie się z nowym planem lekcji, który wejdzie w życie od poniedziałku."
      />
    </div>
  );
}

type Message = {
  author: string;
  title: string;
  content: string;
};

export function MessageCard({ author, title, content }: Readonly<Message>) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Card
        className="flex flex-col bg-muted/40 p-2 rounded-xl cursor-pointer"
        onClick={() => {
          setOpened(true);
        }}
      >
        <CardHeader>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <CardDescription>
            <span className="-mt-2">{author}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="w-2/3 truncate text-nowrap">{content}</p>
        </CardContent>
      </Card>
      <Dialog open={opened} onOpenChange={() => setOpened(false)}>
        <DialogContent className="max-w-4xl w-full min-h-[32rem] h-auto">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogHeader>{author}</DialogHeader>
            <DialogDescription className="mt-6">{content}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

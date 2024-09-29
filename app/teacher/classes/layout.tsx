import { ClassSelector } from "@/components/teacher/ClassSelector";
import React from "react";

export default function ClassLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col m-4">
      <ClassSelector />
      {children}
    </div>
  );
}

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const client = new QueryClient();

export default function QueryClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const classes = [
  "1A",
  "1B",
  "1C",
  "1D",
  "2A",
  "2B",
  "2C",
  "2D",
  "2E",
  "3A",
  "3B",
  "3C",
  "4A",
  "4B",
  "4C",
  "4D",
];

export function ClassSelector() {
  const [open, setOpen] = React.useState(false);
  const { id: selected } = useParams();
  const router = useRouter();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {selected ?? "Wybierz klasę..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Szukaj..." />
          <CommandList>
            <CommandEmpty>Nie znaleziono.</CommandEmpty>
            <CommandGroup>
              {classes.map((class_) => (
                <CommandItem
                  key={class_}
                  value={class_}
                  onSelect={() => router.push(`/teacher/classes/${class_}`)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selected === class_ ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {class_}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

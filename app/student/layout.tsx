"use client"; // Same as in app/layout.tsx
import Image from 'next/image';
import tablogo from '@/lib/tabular.png'
import React from "react";
import Link from "next/link";
import {
  CircleUser,
  HomeIcon,
  Package2,
  MenuIcon,
  SunIcon,
  MoonIcon,
  GraduationCapIcon,
  CalendarDaysIcon,
  MailIcon,
  PercentIcon,
  ClipboardIcon,
  BookOpenTextIcon,
  TriangleAlertIcon
} from "lucide-react";
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
// import { useDarkMode } from "usehooks-ts";

export default function StudentAppShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { isDarkMode, toggle: toggleDarkMode } = useDarkMode();

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full flex-col gap-2">
          <div className="flex h-[40px] items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className=""><Image src={tablogo} alt="Tabular logo" height={90}/></span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8" onClick={() => {}}>
              {true ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
              <span className="sr-only">Toggle dark/light mode</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <SideMenu mobile={false} />
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <SideMenu mobile={true} />
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            {/* <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Commands"
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form> */}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="overflow-y-scroll max-h-[calc(100vh-50px)]">{children}</main>
      </div>
    </div>
  );
}

function SideMenu({
  mobile,
}: Readonly<{
  mobile: boolean;
}>) {
  return (
    <>
      <MenuLink href="/student" icon={<HomeIcon className="w-5 h-5" />} mobile={mobile}>Podsumowanie</MenuLink>
      <MenuLink href="/student/learn" icon={<BookOpenTextIcon className="w-5 h-5" />} mobile={mobile}>Nauka</MenuLink>
      <MenuLink href="/student/grades" icon={<GraduationCapIcon className="w-5 h-5" />} mobile={mobile}>Oceny</MenuLink>
      <MenuLink href="/student/timetable" icon={<CalendarDaysIcon className="w-5 h-5" />} mobile={mobile}>Plan lekcji</MenuLink>
      <MenuLink href="/student/messages" icon={<MailIcon className="w-5 h-5" />} mobile={mobile}>Wiadomości</MenuLink>
      <MenuLink href="/student/attendance" icon={<PercentIcon className="w-5 h-5" />} mobile={mobile}>Frekwencja</MenuLink>
      <MenuLink href="/student/homework" icon={<ClipboardIcon className="w-5 h-5" />} mobile={mobile}>Zadania domowe</MenuLink>
      <MenuLink href="/student/behavior" icon={<TriangleAlertIcon className="w-5 h-5" />} mobile={mobile}>Zachowanie</MenuLink>
    </>
  );
}

function MenuLink({
  href,
  icon,
  mobile = false,
  children,
}: Readonly<{
  href: string;
  icon: React.ReactNode;
  mobile?: boolean;
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return(
    <Link
      href={href}
      className={cn(
        mobile
          ? "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground"
          : "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
        pathname === href ? "text-foreground bg-muted" : "text-muted-foreground",
      )}
    >
      {icon}
      {children}
    </Link>,
  );
}

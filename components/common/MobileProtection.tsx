import { TriangleAlert } from "lucide-react";

export default function MobileProtection() {
  return (
    <article className="z-[999] fixed left-0 top-0 w-screen h-screen bg-background p-6 flex flex-col justify-center lg:hidden">
      <h1 className="flex flex-col items-center gap-y-2 font-bold text-xl text-center">
        <TriangleAlert className="w-14 h-14" />
        Ta strona nie działa na telefonie
      </h1>
      <p className="text-center text-muted-foreground mt-2">
        Ze względu na ograniczony czas jak i dużą ilość funkcji nie mieliśmy
        możliwości przystosowania naszej pokazowej strony do urządzeń mobilnych.
      </p>
    </article>
  );
}

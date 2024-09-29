import Image from "next/image";
import tabularLogo from "@/lib/tabular.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import IncompletenessAlert from "@/components/common/IncompletenessAlert";

export default function Home() {
  return (
    <main>
      <article
        id="hero-header"
        className="bg-gradient-to-br from-[#6400ff] to-[#f42451] flex flex-col justify-center items-center h-screen"
      >
        {/* <Image src={tabularLogo} alt="brand logo" /> */}
        <h1 className="text-8xl font-extrabold">Tabular</h1>
        <h2 className="text-2xl">
          A modern learning tool for schools and students.
        </h2>

        <section className="w-2/3 mt-6">
          <IncompletenessAlert />
        </section>

        <section className="flex flex-row mt-16 gap-x-8">
          <Card className="bg-muted/40 flex-1">
            <CardHeader>
              <CardTitle>
                <p>Widok ucznia</p>
              </CardTitle>
              <CardDescription>
                Zobacz przykładowy wygląd naszego dziennika od strony ucznia.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/student">
                <Button>Przejdź</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-muted/40 flex-1">
            <CardHeader>
              <CardTitle>
                <p>Widok nauczyciela</p>
              </CardTitle>
              <CardDescription>
                Zobacz do jakich danych ma dostęp nauczyciel korzystający z
                naszej platformy.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/teacher">
                <Button>Przejdź</Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </article>
    </main>
  );
}

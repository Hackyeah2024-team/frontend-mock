import LearningCard from "@/components/student/LearningCard";
import { GlobeIcon } from "@radix-ui/react-icons";
import { BookIcon, YoutubeIcon } from "lucide-react";

export default function StudentLearn() {
  return (
    <article className="flex flex-col p-6">
      <h1 className="font-bold text-2xl">Przygotowane dla Ciebie.</h1>
      <p className="text-md text-muted-foreground">
        Tematy i zagadnienia, które według nas powinienneś powtórzyć.
      </p>
      <section className="flex flex-col mt-6 gap-6">
        <LearningCard
          data={{
            topic: "Ułamki",
            reasons: [
              {
                title: "Wypadłeś poniżej średniej.",
                href: "/student/grades/12345",
              },
              { title: "Zauważyliśmy problemy z powiązanymi tematami." },
            ],
            resources: [
              { icon: <BookIcon className="w-4 h-4 mr-2" />, title: "E-book" },
              {
                icon: <YoutubeIcon className="w-4 h-4 mr-2" />,
                title: "Matemaks",
                href: "https://www.youtube.com/watch?v=NkLOTuFOpuk",
              },
              {
                icon: <GlobeIcon className="w-4 h-4 mr-2" />,
                title: "Brainly",
              },
            ],
          }}
        />
        <LearningCard
          data={{
            topic: "Antyk",
            reasons: [
              {
                title: "Dostałeś ocenę niedostateczną.",
                href: "/student/grades/12345",
              },
            ],
            resources: [
              {
                icon: <BookIcon className="w-4 h-4 mr-2" />,
                title: "Repetytorium",
              },
              {
                icon: <YoutubeIcon className="w-4 h-4 mr-2" />,
                title: "Maturalni",
              },
            ],
          }}
        />
        <LearningCard
          data={{
            topic: "Past Perfect",
            reasons: [
              {
                title: "Uwaga nauczyciela.",
                href: "/student/temporary",
              },
            ],
            resources: [
              { icon: <BookIcon className="w-4 h-4 mr-2" />, title: "E-book" },
              {
                icon: <YoutubeIcon className="w-4 h-4 mr-2" />,
                title: "Rock Your English",
                href: "https://www.youtube.com/watch?v=CIEYdHkI5ZU",
              },
            ],
          }}
        />
      </section>
    </article>
  );
}

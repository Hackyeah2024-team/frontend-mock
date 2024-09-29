import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function HackYeahBanner() {
  return (
    <Card x-chunk="dashboard-02-chunk-0">
      <CardHeader className="p-2 pt-0 md:p-4">
        <CardTitle>HackYeah 2024</CardTitle>
        <CardDescription>
          This project is our submission for HackYeah event. It is not meant to
          be the final product.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
        <Link href="https://hackyeah.pl/">
          <Button size="sm" className="transition ease-in-out duration-500 w-full bg-primary hover:bg-secondary hover:text-black border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
            Visit Event Website
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

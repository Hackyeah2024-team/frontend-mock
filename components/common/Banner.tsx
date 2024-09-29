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
          <Button size="sm" className="w-full">
            Visit Event Website
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

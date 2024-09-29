import { PuzzleIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

export default function IncompletenessAlert() {
  return (
    <Alert>
      <PuzzleIcon className="w-4 h-4" />
      <AlertTitle>Ta strona jest niekompletna!</AlertTitle>
      <AlertDescription className="text-muted-foreground">
        Ze względu do brak czasu oraz skupienie na dobrym przemyśleniu flagowych
        funkcjonalności strona nie jest w pełni interaktywna, jak i nie posiada
        niektórych funkcjonalności.
        <br />
        Głównym założeniem tej strony jest poglądowe przedstawienie designu
        naszych komponentów oraz układu strony.
      </AlertDescription>
    </Alert>
  );
}

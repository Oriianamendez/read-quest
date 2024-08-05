import { charlotteWebBook } from "./books";
import { CTAButton } from "./buttons";
import { Label } from "./section";
import { questionsCharlotteWeb } from "./questionary";

export function Form() {
  return (
    <form action="" className="flex flex-col items-center">
      <Label information={charlotteWebBook.name} />
      <Label information={questionsCharlotteWeb.Question1} />
      <Label information={questionsCharlotteWeb.Question2} />
      <CTAButton />
    </form>
  );
}

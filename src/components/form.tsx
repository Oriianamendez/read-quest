import { charlotteWebBook } from "./books";
import { CTAButton } from "./buttons";
import { Label } from "./section";
import { questionsCharlotteWeb } from "./questionary";

export function Form() {
  return (
    <form action="" className="flex flex-col items-center">
      <Label
        placeholder={"Type the answer"}
        information={questionsCharlotteWeb.Question1}
      />
      <Label
        placeholder={"Type the answer"}
        information={questionsCharlotteWeb.Question2}
      />
      <Label
        placeholder={"Type the answer"}
        information={questionsCharlotteWeb.Question3}
      />
      <footer>
        <CTAButton name={"Get your points"} />
      </footer>
    </form>
  );
}

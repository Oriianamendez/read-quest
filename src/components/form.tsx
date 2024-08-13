import { useEffect, useState } from "react";
import { Label, CTAButton } from "@/components";
import { getQuestions } from "@/db/queries";

export function Form() {
  const [questions, setQuestions] = useState<any>([]);

  useEffect(() => {
    getQuestions("d1abbe98-c6a3-4dab-841b-e59ae8e7dfdc").then((data) => {
      setQuestions(data);
      console.log({ data });
    });
  }, []);

  return (
    <form action="" className="flex flex-col items-center">
      {questions.map((question: any) => {
        return (
          <Label
            key={question.id}
            placeholder={"Type the answer"}
            information={question.questions}
          />
        );
      })}
      <footer>
        <CTAButton name={"Get your points"} />
      </footer>
    </form>
  );
}

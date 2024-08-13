import { useEffect, useState } from "react";
import { Label, CTAButton } from "@/components";
import { getQuestions } from "@/db/queries";

export function Form({ bookId }: { bookId: string }) {
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    getQuestions(bookId).then((data) => {
      setQuestions(data);
    });
  }, [bookId]);

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

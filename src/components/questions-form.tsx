import { useEffect, useState } from "react";
import { Label, CTAButton } from "@/components";
import { getQuestions, handleAnswers } from "@/db/queries";

export function QuestionsForm({ bookId }: { bookId: string }) {
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    getQuestions(bookId).then((data) => {
      setQuestions(data);
    });
  }, [bookId]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const success = await handleAnswers(formData);
    if (success) {
      // Close the modal
      (document.getElementById("my_modal_3") as HTMLDialogElement)?.close();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input type="text" hidden name="book_id" defaultValue={bookId} />
      {questions.map((question: any) => {
        return (
          <Label
            key={question.id}
            placeholder={"Type the answer"}
            information={question.questions}
            name={question.id}
          />
        );
      })}
      <footer className="mt-4 flex place-self-end pr-20">
        <CTAButton name={"Send"} />
      </footer>
    </form>
  );
}

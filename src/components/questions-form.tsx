import { useEffect, useState } from "react";
import { Label, CTAButton } from "@/components";
import { getQuestions } from "@/db/queries";
import { handleAnswers } from "@/lib/actions";

export function QuestionsForm({
  bookId,
  updateBooksRead,
}: {
  bookId: string;
  updateBooksRead: any;
}) {
  const [questions, setQuestions] = useState<any[]>([]);
  const [questionsSent, setQuestionsSent] = useState(false);
  const [onError, setOnError] = useState(false);

  useEffect(() => {
    getQuestions(bookId).then((data) => {
      setQuestions(data);
    });
  }, [bookId]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const result = await handleAnswers(formData);
    if (result.success) {
      setQuestionsSent(true);
      updateBooksRead(result.booksRead);
      setTimeout(() => {
        setQuestionsSent(false);
        (document.getElementById("my_modal_3") as HTMLDialogElement)?.close();
      }, 2000);
    } else {
      setOnError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input type="text" hidden name="book_id_hidden" value={bookId} readOnly />
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
        <CTAButton name={"Send answers"} />
      </footer>
      {questionsSent && (
        <div className="toast toast-bottom">
          <div className="alert bg-purple-300">
            <span>Questions sent successfully!</span>
          </div>
        </div>
      )}
      {onError && (
        <div className="toast toast-bottom">
          <div className="alert bg-purple-300">
            <span>Unfortunately the questions could not be sent</span>
          </div>
        </div>
      )}
    </form>
  );
}

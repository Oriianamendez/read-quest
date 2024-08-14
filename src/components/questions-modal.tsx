"use client";

import { getBooks } from "@/db/queries";
import { CTAButton } from "./buttons";
import { QuestionsForm } from "./questions-form";
import { useEffect, useState } from "react";

export function QuestionsModalForm() {
  const [bookId, setBookId] = useState<any>(null);
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    getBooks().then((data) => {
      setBooks(data);
    });
  }, []);

  const showQuestions = () => {
    (document.getElementById("my_modal_3") as HTMLDialogElement)?.showModal();
  };

  return (
    <main className="md:flex md:flex-col md:items-center pb-20">
      <select
        className="select select-warning w-full max-w-xs"
        onChange={(e) => setBookId(e.currentTarget.value)}
      >
        {books.map((book: any) => {
          return (
            <option key={book.id} value={book.id}>
              {book.name}
            </option>
          );
        })}
      </select>
      <div className="mt-4">
        <CTAButton
          name={"Get your questions"}
          onClick={() => {
            showQuestions();
          }}
        />
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {bookId && <QuestionsForm bookId={bookId} />}
        </div>
      </dialog>
    </main>
  );
}

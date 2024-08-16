"use client";

import { CTAButton } from "./buttons";
import { QuestionsForm } from "./questions-form";
import { useState } from "react";

export function QuestionsModalForm({
  books,
  updateBooksRead,
}: {
  books: any;
  updateBooksRead: any;
}) {
  const [bookId, setBookId] = useState<any>(null);

  const showQuestions = () => {
    (document.getElementById("my_modal_3") as HTMLDialogElement)?.showModal();
  };

  return (
    <main className="md:flex md:flex-col flex flex-col items-center pt-10">
      <select
        className="select select-warning w-full max-w-xs bg-white text-black"
        onChange={(e) => setBookId(e.currentTarget.value)}
      >
        <option value="Select your book">Select your book</option>
        {books.map((book: any) => {
          return (
            <option key={book.id} value={book.id}>
              {book.name}
            </option>
          );
        })}
      </select>
      <div className="md:mt-4 mt-4 mb-8">
        <CTAButton
          name={"Store your book!"}
          onClick={() => {
            showQuestions();
          }}
        />
      </div>
      <div className="md:pt-10 md:text-7xl md:flex md:flex-col md:items-center md:text-yellow-300 hidden">
        <p>⇩</p>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {bookId && (
            <QuestionsForm bookId={bookId} updateBooksRead={updateBooksRead} />
          )}
        </div>
      </dialog>
    </main>
  );
}

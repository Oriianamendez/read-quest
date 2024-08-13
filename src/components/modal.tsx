"use client";

import { getBooks, getQuestions } from "@/db/queries";
import { CTAButton } from "./buttons";
import { Form } from "./form";
import { useEffect, useState } from "react";

export function ModalForm() {
  const [bookId, setBookId] = useState<any>(null);
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    getBooks().then((data) => {
      setBooks(data);
      console.log({ data });
    });
  }, []);

  const showQuestions = () => {
    "use client";
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
      <div>
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
          {bookId && <Form bookId={bookId} />}
        </div>
      </dialog>
    </main>
  );
}

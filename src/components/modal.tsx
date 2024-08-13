"use client";

import { getQuestions } from "@/db/queries";
import { books } from "./books";
import { CTAButton } from "./buttons";
import { Form } from "./form";
import { useState } from "react";

export function ModalForm() {
  const [book, setBook] = useState("");

  const showQuestions = () => {
    "use client";
    (document.getElementById("my_modal_3") as HTMLDialogElement)?.showModal();
  };

  return (
    <main className="md:flex md:flex-col md:items-center pb-20">
      <select
        className="select select-warning w-full max-w-xs"
        onChange={(e) => setBook(e.currentTarget.value)}
        value={book}
      >
        <option value={"Select your book"}>Select your book</option>
        <option value={books.charlotteWebBook.name}>
          {books.charlotteWebBook.name}
        </option>
        <option value={books.theMagicTreeHouseBook.name}>
          {books.theMagicTreeHouseBook.name}
        </option>
        <option value={books.theBfgBook.name}>{books.theBfgBook.name}</option>
      </select>
      <div>
        <CTAButton
          name={"Get your questions"}
          onClick={async () => {
            await getQuestions(book), showQuestions();
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
          <Form />
        </div>
      </dialog>
    </main>
  );
}

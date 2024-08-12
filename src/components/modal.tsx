"use client";

import { handleQuestion } from "@/db/queries";
import { books } from "./books";
import { CTAButton } from "./buttons";
import { Form } from "./form";

export function ModalForm() {
  const showQuestions = () => {
    (document.getElementById("my_modal_3") as HTMLDialogElement)?.showModal();
  };

  return (
    <main className="md:flex md:flex-col md:items-center pb-20">
      <form action={handleQuestion}>
        <select className="select select-warning w-full max-w-xs">
          <option disabled selected>
            Select your book
          </option>
          <option>{books.charlotteWebBook.name}</option>
          <option>{books.theMagicTreeHouseBook.name}</option>
          <option>{books.theBfgBook.name}</option>
        </select>
        <div>
          <CTAButton
            name={"Get your questions"}
            onClick={() => showQuestions()}
          />
        </div>
      </form>
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

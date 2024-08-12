"use client";

import { CTAButton } from "./buttons";
import { Form } from "./form";

export function ModalForm() {
  return (
    <main className="md:flex md:flex-col md:items-center pb-20">
      <select className="select select-warning w-full max-w-xs">
        <option disabled selected>
          Select your book
        </option>
        <option>Book 1</option>
        <option>Book 2</option>
        <option>Book 3</option>
        <option>Book 4</option>
      </select>

      <div>
        <CTAButton
          name={"Get your questions"}
          onClick={() =>
            (
              document.getElementById("my_modal_3") as HTMLDialogElement
            )?.showModal()
          }
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

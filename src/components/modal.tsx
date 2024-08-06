"use client";

import { CTAButton } from "./buttons";
import { Form } from "./form";
import { Label } from "./section";

export function ModalForm() {
  return (
    <main className="md:flex md:flex-col md:items-center">
      <Label placeholder={"Type the book title"} information={"Book title"} />
      <CTAButton
        name={"Get your questions"}
        onClick={() =>
          (
            document.getElementById("my_modal_3") as HTMLDialogElement
          )?.showModal()
        }
      />
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

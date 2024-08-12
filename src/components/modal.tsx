"use client";

import { CTAButton } from "./buttons";
import { Form } from "./form";
import { Label } from "./section";

export function ModalForm() {
  return (
    <main className="md:flex md:flex-col md:items-center pb-6">
      <Label placeholder={"Type the book title"} information={"Book title"} />
      <div className="pt-4">
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

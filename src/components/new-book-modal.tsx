"use client";

import { handleNewBooks } from "@/db/queries";
import { CTAButton } from "./buttons";
import { Label } from "./section";
import { useState } from "react";

export function NewBookModal() {
  return (
    <>
      <CTAButton
        name={"New Book"}
        onClick={() =>
          (
            document.getElementById("my_modal_4") as HTMLDialogElement
          )?.showModal()
        }
      />
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-6/12 max-w-5xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <NewBookForm />
        </div>
      </dialog>
    </>
  );
}

function NewBookForm() {
  const [bookSent, setBookSent] = useState(false);
  const [onError, setOnError] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const success = await handleNewBooks(formData);
    if (success) {
      setBookSent(true);
      setTimeout(
        () =>
          (document.getElementById("my_modal_4") as HTMLDialogElement)?.close(),
        2000
      );
    }
    if (!success) {
      setOnError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <Label placeholder="Book title" information="Title" name="name" />
      <Label placeholder="Book author" information="Author" name="author" />
      <Label
        placeholder="Brief description of the book"
        information="Description"
        name="description"
      />
      <Label placeholder="Pages" information="Pages" name="pages" />
      <Label placeholder="Points" information="Points" name="points" />
      <Label placeholder="From which age" information="Age" name="age" />
      <footer className="mt-4">
        <CTAButton name={"Add new book"} />
      </footer>
      {bookSent && (
        <div className="toast">
          <div className="alert bg-purple-300">
            <span>Book sent successfully!</span>
          </div>
        </div>
      )}
      {onError && (
        <div className="toast">
          <div className="alert bg-red-300">
            <span>Unfortunately book not sent.</span>
          </div>
        </div>
      )}
    </form>
  );
}

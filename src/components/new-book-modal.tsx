"use client";

import { handleNewBooks } from "@/lib/actions";
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
      <Label
        placeholder="Harry Potter and the Sorcerer's..."
        information="Book title"
        name="name"
      />
      <Label placeholder="J.K. Rowling" information="Author" name="author" />
      <Label
        placeholder="Harry Potter has no idea how..."
        information="Brief description of the book"
        name="description"
      />
      <Label placeholder="Pages" information="Pages" name="pages" />
      <Label placeholder="Points" information="Points" name="points" />
      <Label placeholder="Min reading age" information="Age" name="age" />
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

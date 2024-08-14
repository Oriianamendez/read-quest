import { CloseButton, CTAButton } from "./buttons";
import { Label } from "./section";

export function NewBookModal() {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
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
          <NewBookForm />
        </div>
      </dialog>
    </>
  );
}

function NewBookForm() {
  return (
    <form action="" className="flex flex-col items-center" method="dialog">
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
      <footer className="mt-4 gap-20 flex justify-between">
        <CloseButton />
        <CTAButton name={"Get your points"} />
      </footer>
    </form>
  );
}

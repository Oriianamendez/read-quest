import { BookRead, ModalForm } from "@/components";

export default function Page() {
  return (
    <>
      <div>
        <header>
          <h1>Welcome User!</h1>
          <p>Track and treasure your reading adventures</p>
        </header>
        <div>
          <p>Points</p>
          <p>Books</p>
        </div>
        <main>
          <p>Image?</p>
          <ModalForm />
          <BookRead
            name={"name"}
            author={"author"}
            pages={123}
            image={""}
            points={3}
          />
        </main>
      </div>
    </>
  );
}

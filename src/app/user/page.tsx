import { BookRead, HeaderForUser, ModalForm } from "@/components";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="flex justify-between pt-24">
        <header>
          <HeaderForUser />
        </header>
        <div className="pr-32 py-6 md:text-xl text-xl font-semibold text-center">
          <p>Points</p>
          <p>Books</p>
        </div>
      </div>
      <main>
        <ModalForm />
        <BookRead
          name={"name"}
          author={"author"}
          pages={123}
          image={""}
          points={3}
        />
      </main>
    </>
  );
}

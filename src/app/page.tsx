import {
  charlotteWebBook,
  theBfgBook,
  theMagicTreeHouseBook,
} from "@/components/books";
import { BookCards } from "@/components/cards";
import { Description } from "@/components/description";
import { ModalForm } from "@/components/modal";
import { TopNavPage } from "@/components/top-nav";

export default function Home() {
  return (
    <>
      <TopNavPage />
      <main className="">
        <Description />
        <div className="flex gap-4 p-4 pt-8 justify-center">
          <BookCards {...charlotteWebBook} />
          <BookCards {...theMagicTreeHouseBook} />
          <BookCards {...theBfgBook} />
        </div>
        <div className="flex flex-col items-center">
          <ModalForm />
        </div>
      </main>
    </>
  );
}

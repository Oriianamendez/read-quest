import {
  Description,
  Main,
  BookCards,
  ModalForm,
  charlotteWebBook,
  theBfgBook,
  theMagicTreeHouseBook,
} from "@/components";

export default function Home() {
  return (
    <div className="content">
      <Main>
        <Description />
        <main className="md:flex md:gap-4 md:p-4 md:pt-8 justify-center">
          <BookCards {...charlotteWebBook} />
          <BookCards {...theMagicTreeHouseBook} />
          <BookCards {...theBfgBook} />
        </main>
        <ModalForm />
      </Main>
    </div>
  );
}

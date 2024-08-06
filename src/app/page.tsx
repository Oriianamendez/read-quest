import {
  Header,
  Main,
  BookCards,
  ModalForm,
  charlotteWebBook,
  theBfgBook,
  theMagicTreeHouseBook,
  Description,
} from "@/components";

export default function Home() {
  return (
    <div className="content">
      <Main>
        <Header />
        <Description />
        <main className="md:flex md:gap-4 md:p-4 md:pt-8 justify-center pt-4 pb-4">
          <BookCards {...charlotteWebBook} />
          <BookCards {...theMagicTreeHouseBook} />
          <BookCards {...theBfgBook} />
        </main>
        <ModalForm />
      </Main>
    </div>
  );
}

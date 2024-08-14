import {
  Header,
  Main,
  BookCards,
  charlotteWebBook,
  theBfgBook,
  theMagicTreeHouseBook,
  Description,
  TopNav,
} from "@/components";

export default function Home() {
  return (
    <div className="content bg-yellow-100">
      <TopNav />
      <Main>
        <Header />
        <Description />
        <main className="bg-yellow-100 md:flex md:gap-4 md:p-4 md:pt-8 justify-center pt-4 pb-4">
          <BookCards {...charlotteWebBook} />
          <BookCards {...theMagicTreeHouseBook} />
          <BookCards {...theBfgBook} />
        </main>
      </Main>
    </div>
  );
}

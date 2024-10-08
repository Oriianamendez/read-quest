"use client";

import {
  Header,
  BookCards,
  CTAButton,
  DeleteButton,
  charlotteWebBook,
  theBfgBook,
  theMagicTreeHouseBook,
  Main,
  Description,
  TopNav,
} from "@/components";

export default function DesignSystemPage() {
  return (
    <div className="contents">
      <TopNav />
      <Main>
        <Header />
        <Description />

        <div className="flex gap-4 p-4 justify-center">
          <BookCards {...charlotteWebBook} />
          <BookCards {...theMagicTreeHouseBook} />
          <BookCards {...theBfgBook} />
        </div>
        <p>
          Font: <strong>Roboto</strong>
        </p>
        <CTAButton name={"Get your points"} />
        <DeleteButton />
        <div className="flex flex-col items-center"></div>
      </Main>
    </div>
  );
}

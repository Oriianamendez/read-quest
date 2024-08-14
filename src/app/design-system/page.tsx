import {
  QuestionsModalForm,
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
  TopNavUser,
} from "@/components";

export default function DesignSystemPage() {
  return (
    <div className="contents">
      <TopNav />
      <TopNavUser />
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
        <div className="flex flex-col items-center">
          <QuestionsModalForm />
        </div>
      </Main>
    </div>
  );
}

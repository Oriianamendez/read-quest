import {
  ModalForm,
  Description,
  BookCards,
  CTAButton,
  DeleteButton,
  charlotteWebBook,
  theBfgBook,
  theMagicTreeHouseBook,
  Main,
} from "@/components";

export default function DesignSystemPage() {
  return (
    <div className="contents">
      <Main>
        <Description />
        <CTAButton name={"Get your points"} />
        <DeleteButton />
        <div className="flex gap-4 p-4 justify-center">
          <BookCards {...charlotteWebBook} />
          <BookCards {...theMagicTreeHouseBook} />
          <BookCards {...theBfgBook} />
        </div>
        <p>
          Font: <strong>Roboto</strong>
        </p>
        <div className="flex flex-col items-center">
          <ModalForm />
        </div>
      </Main>
    </div>
  );
}

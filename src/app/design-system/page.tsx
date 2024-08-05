import {
  charlotteWebBook,
  theBfgBook,
  theMagicTreeHouseBook,
} from "@/components/books";
import { CTAButton, DeleteButton } from "@/components/buttons";
import { BookCards } from "@/components/cards";
import { Description } from "@/components/description";
import { ModalForm } from "@/components/modal";
import { TopNavPage } from "@/components/top-nav";

export default function DesignSystemPage() {
  return (
    <div className="contents">
      <TopNavPage />
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
    </div>
  );
}

import {
  charlotteWebBook,
  theBfgBook,
  theMagicTreeHouseBook,
} from "@/components/books";
import { CTAButton, DeleteButton } from "@/components/buttons";
import { BookCards } from "@/components/cards";
import { Description } from "@/components/description";
import { Form } from "@/components/form";
import { TopNavPage } from "@/components/top-nav";

export default function DesignSystemPage() {
  return (
    <>
      <TopNavPage />
      <Description />
      <CTAButton />
      <DeleteButton />
      <div className="flex gap-4 p-4 justify-center">
        <BookCards {...charlotteWebBook} />
        <BookCards {...theMagicTreeHouseBook} />
        <BookCards {...theBfgBook} />
      </div>
      <p>
        Font: <strong>Roboto</strong>
      </p>
      <Form />
    </>
  );
}

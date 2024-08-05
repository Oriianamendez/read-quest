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
      <BookCards />
      <p>
        Font: <strong>Roboto</strong>
      </p>
      <Form />
    </>
  );
}

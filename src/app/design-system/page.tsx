import { CTAButton, DeleteButton } from "@/components/buttons";
import { BookCards } from "@/components/cards";
import { Form } from "@/components/form";
import { TopNavPage } from "@/components/top-nav";

export default function DesignSystemPage() {
  return (
    <>
      <TopNavPage />
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

import { CTAButton, DeleteButton } from "@/components/buttons";
import { BookCards } from "@/components/cards";
import { TopNavPage } from "@/components/top-nav";

export default function DesignSystemPage() {
  return (
    <>
      <TopNavPage />
      <CTAButton />
      <DeleteButton />
      <BookCards />
    </>
  );
}

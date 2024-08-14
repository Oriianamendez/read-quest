"use client";

import {
  BookRead,
  HeaderForUser,
  QuestionsModalForm,
  TopNavUser,
} from "@/components";
import { TotalPointsAndBooks } from "@/components";

export default function Page() {
  return (
    <>
      <TopNavUser />
      <div className="flex justify-between pt-24">
        <header>
          <HeaderForUser />
        </header>
        <TotalPointsAndBooks />
      </div>
      <main>
        <QuestionsModalForm />
        <BookRead />
      </main>
    </>
  );
}

"use client";

import {
  BookRead,
  HeaderForUser,
  QuestionsModalForm,
  TopNavUser,
} from "@/components";
import { TotalPointsAndBooks } from "@/components";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <TopNavUser />
      <div className="flex justify-between pt-24">
        <header>
          <HeaderForUser />
        </header>
        <Suspense fallback={<p className="text-black">Loading points...</p>}>
          <TotalPointsAndBooks />
        </Suspense>
      </div>
      <main>
        <Suspense fallback={<p className="text-black">Loading books...</p>}>
          <QuestionsModalForm />
        </Suspense>
        <BookRead />
      </main>
    </>
  );
}

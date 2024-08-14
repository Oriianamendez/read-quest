"use client";

import {
  BookRead,
  HeaderForUser,
  QuestionsModalForm,
  TopNavUser,
} from "@/components";

export default function Page() {
  return (
    <>
      <TopNavUser />
      <div className="flex justify-between pt-24">
        <header>
          <HeaderForUser />
        </header>
        <div className="pr-32 py-6 md:text-xl text-xl font-semibold text-center">
          <p>Points</p>
          <p>Books</p>
        </div>
      </div>
      <main>
        <QuestionsModalForm />
        <BookRead name={"name"} author={"author"} pages={123} points={3} />
      </main>
    </>
  );
}

"use client";

import {
  BookRead,
  HeaderForUser,
  QuestionsModalForm,
  TopNavUser,
} from "@/components";
import { Suspense } from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <TopNavUser />
      <div className="flex justify-evenly pt-16 pb-4 ">
        <div>
          <header>
            <HeaderForUser />
          </header>
          <main>
            <QuestionsModalForm />
          </main>
        </div>
        <Image
          width={600}
          height={600}
          src="/boy-reading-book.png"
          className="rounded-lg pr-24"
          alt="A boy reading a book"
          priority
        />
      </div>
      <BookRead />
    </div>
  );
}

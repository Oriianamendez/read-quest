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
      <div className="flex justify-evenly pt-20 ">
        <div>
          <header>
            <HeaderForUser />
          </header>
          <main>
            <Suspense fallback={<p className="text-black">Loading books...</p>}>
              <QuestionsModalForm />
            </Suspense>
          </main>
        </div>
        <Image
          width={600}
          height={600}
          src="/boy-reading-book.png"
          className="rounded-lg pr-24"
          alt="A boy reading a book"
        />
      </div>
      <BookRead />
    </div>
  );
}

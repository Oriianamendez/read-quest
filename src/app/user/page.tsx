"use client";

import {
  BookRead,
  HeaderForUser,
  QuestionsModalForm,
  TopNavUser,
} from "@/components";
import { getBooks } from "@/db/queries";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    getBooks().then((data) => {
      setBooks(data);
    });
  }, []);

  return (
    <div>
      <TopNavUser updateBooks={(book: any) => setBooks([book, ...books])} />
      <div className="flex justify-evenly pt-16 pb-4 ">
        <div>
          <header>
            <HeaderForUser />
          </header>
          <main>
            <QuestionsModalForm books={books} />
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

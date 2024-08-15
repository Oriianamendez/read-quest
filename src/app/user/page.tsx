"use client";

import {
  BookRead,
  HeaderForUser,
  QuestionsModalForm,
  TopNavUser,
} from "@/components";
import { getBookRead, getBooks } from "@/db/queries";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  const [books, setBooks] = useState<any[]>([]);
  const [booksRead, setBooksRead] = useState<any>([]);

  useEffect(() => {
    getBooks().then((data) => {
      setBooks(data);
    });

    getBookRead("35895cdb-96ee-4828-8ef4-7e3ceb5a3048").then((data) => {
      setBooksRead(data);
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
            <QuestionsModalForm books={books} updateBooksRead={setBooksRead} />
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
      <BookRead booksRead={booksRead} />
    </div>
  );
}

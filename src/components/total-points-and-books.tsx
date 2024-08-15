"use client";

import { getBookRead } from "@/db/queries";
import { showTotalBooksRead } from "@/lib/actions";
import { useEffect, useState } from "react";

export function TotalPointsAndBooks() {
  const [data, setData] = useState<number>(0);
  const [totalBooksRead, setTotalBooksRead] = useState<any>([]);

  useEffect(() => {
    showTotalBooksRead().then((result) => {
      setData(result[0].value);
    });

    getBookRead("35895cdb-96ee-4828-8ef4-7e3ceb5a3048").then((result) => {
      const totalBooks = result.map((bookRead) => {
        return bookRead.book.points;
      });
      let sum = 0;
      totalBooks.forEach((el) => (sum += el));

      setTotalBooksRead(sum);
    });
  }, []);

  return (
    <>
      <div className="gap-10 md:text-3xl font-semibold text-center flex text-xl pt-6 pb-2 text-slate-600">
        <p className="flex flex-col shadow-lg py-4 px-8 rounded-xl bg-yellow-200">
          <span className="text-purple-700 p-2 text-6xl">{totalBooksRead}</span>
          Points
        </p>
        <p className="flex flex-col shadow-lg py-4 px-8 rounded-xl bg-yellow-200">
          <span className="text-purple-700 p-2 text-6xl">{data}</span>
          Books
        </p>
      </div>
    </>
  );
}

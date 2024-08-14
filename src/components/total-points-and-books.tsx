"use client";

import { getBookRead, showTotalBooksRead } from "@/db/queries";
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
      <div className="gap-4 md:text-2xl font-semibold text-center flex text-xl">
        <p>
          Points
          <span className="text-purple-700 rounded-full p-2 ">
            {totalBooksRead}
          </span>
        </p>
        <p>
          Books
          <span className="text-purple-700 rounded-full p-2 ">{data}</span>
        </p>
      </div>
    </>
  );
}

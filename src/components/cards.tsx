"use client";

import { Checkbox, CTAButton, Main, TotalPointsAndBooks } from "@/components";
import { getBookRead } from "@/db/queries";
import Image from "next/image";
import { useEffect, useState } from "react";

export function BookCards({
  name,
  author,
  description,
  pages,
  image,
  points,
}: {
  name: string;
  author: string;
  description: string;
  pages: number;
  image: string;
  points: number;
}) {
  return (
    <article className="card bg-purple-300 text-slate-600 w-96 shadow-xl pt-5 mb-4">
      <figure>
        <Image
          width={130}
          height={180}
          src={image}
          className="rounded-md"
          alt="An image of a book"
          style={{ width: "200px", height: "250px" }}
        />
      </figure>
      <section className="card-body pt-2 pb-5">
        <h2 className="card-title text-xl text-slate-900">{name}</h2>
        <p>{author}</p>
        <p className=" text-sm text-justify">{description}</p>
        <footer className="card-actions flex justify-between">
          <div className="flex flex-col">
            <p>
              Pages
              <strong className="text-slate-900 text-lg"> {pages}</strong>
            </p>
            <p>
              Points
              <strong className="text-slate-900 text-lg"> {points}</strong>
            </p>
          </div>
          <CTAButton name={"Read"} />
        </footer>
      </section>
    </article>
  );
}

export function BookRead() {
  const [booksRead, setBooksRead] = useState<any>([]);

  useEffect(() => {
    getBookRead("35895cdb-96ee-4828-8ef4-7e3ceb5a3048").then((data) => {
      setBooksRead(data);
    });
  }, []);

  return (
    <main className="flex flex-col items-center bg-yellow-300">
      <TotalPointsAndBooks />
      <div className="flex flex-wrap justify-center gap-4 items-center">
        {booksRead &&
          booksRead.map((bookRead: any) => {
            return (
              <article
                className="card bg-yellow-100 text-slate-600 w-80 shadow-xl gap-2 mb-4 mt-8 mx-4 pt-4"
                key={bookRead.id}
              >
                {bookRead.book.image && (
                  <figure>
                    <Image
                      width={130}
                      height={180}
                      src={bookRead.book.image}
                      className="rounded-md"
                      alt="An image of a book"
                      style={{ width: "200px", height: "250px" }}
                    />
                  </figure>
                )}
                <section className="card-body">
                  <h2 className="card-title text-xl text-purple-700">
                    {bookRead.book.name}
                  </h2>
                  <p>{bookRead.book.author}</p>
                  <footer className="card-actions flex justify-between">
                    <div className="flex flex-col">
                      <p>
                        {"Pages "}
                        <strong className="text-purple-700 text-lg">
                          {bookRead.book.pages}
                        </strong>
                      </p>
                      <p>
                        {"Points "}
                        <strong className="text-purple-700 text-lg">
                          {bookRead.book.points}
                        </strong>
                      </p>
                    </div>
                    <Checkbox />
                  </footer>
                </section>
              </article>
            );
          })}
      </div>
    </main>
  );
}

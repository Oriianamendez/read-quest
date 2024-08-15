"use server";

import { count, eq } from "drizzle-orm";
import { db } from "./index";
import { bookRead, books, kidAnswers, questions } from "./schema";

export const getQuestions = async (bookId: string) =>
  await db.query.questions.findMany({
    where: eq(questions.book_id, bookId),
  });

export const getBooks = async () => {
  return await db.query.books.findMany();
};

export const getBookRead = async (kidId: string) => {
  return await db.query.bookRead.findMany({
    with: {
      book: true,
    },
    where: eq(bookRead.kid_id, kidId),
  });
};

export const saveAnswers = async (answer: string, questionId: string) => {
  await db.insert(kidAnswers).values({
    answer,
    question_id: questionId,
    kid_id: "35895cdb-96ee-4828-8ef4-7e3ceb5a3048",
  });
};

export const saveBookRead = async (bookId: string) => {
  await db.insert(bookRead).values({
    book_id: bookId,
    kid_id: "35895cdb-96ee-4828-8ef4-7e3ceb5a3048",
  });
};

export type NewBooks = typeof books.$inferInsert;

export const saveNewBooks = async (newBook: NewBooks) => {
  await db.insert(books).values(newBook);
};

export const getTotalBooksRead = async (kidId: string) => {
  return await db
    .select({ value: count() })
    .from(bookRead)
    .where(eq(bookRead.kid_id, kidId));
};

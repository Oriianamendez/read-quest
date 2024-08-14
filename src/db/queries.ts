"use server";

import { and, count, eq } from "drizzle-orm";
import { db } from "./index";
import { bookRead, books, kidAnswers, questions } from "./schema";

export const getQuestions = async (bookId: string) => {
  try {
    await db.query.questions.findMany({
      where: eq(questions.book_id, bookId),
    });
  } catch (error) {
    return new Error("The questions could not be found");
  }
};

export const getBooks = async () => await db.query.books.findMany();

export const getBookRead = async (kidId: string) => {
  try {
    return await db.query.bookRead.findMany({
      with: {
        book: true,
      },
      where: eq(bookRead.kid_id, kidId),
    });
  } catch (error) {
    return new Error("The books could not be found");
  }
};

export const saveAnswers = async (answer: string, questionId: string) => {
  await db.insert(kidAnswers).values({
    answer,
    question_id: questionId,
    kid_id: "35895cdb-96ee-4828-8ef4-7e3ceb5a3048",
  });
};

export const saveBookRead = async (bookId: string) => {
  try {
    await db.insert(bookRead).values({
      book_id: bookId,
      kid_id: "35895cdb-96ee-4828-8ef4-7e3ceb5a3048",
    });
  } catch (error) {
    return new Error("The book could not be saved");
  }
};

export const handleAnswers = async (formData: FormData) => {
  try {
    formData.forEach((answer, questionId) => {
      saveAnswers(answer as string, questionId);
    });
    await saveBookRead(formData.get("book_id") as string);
  } catch (error) {
    return new Error("The answers could not be saved");
  }
};

export type NewBooks = typeof books.$inferInsert;

export const saveNewBooks = async (newBook: NewBooks) => {
  await db.insert(books).values(newBook);
};

export const handleNewBooks = async (formData: FormData) => {
  const newBook: NewBooks = {
    name: formData.get("name") as string,
    author: formData.get("author") as string,
    description: formData.get("description") as string,
    pages: Number(formData.get("pages")),
    points: Number(formData.get("points")),
    age: Number(formData.get("age")),
  };

  try {
    await saveNewBooks(newBook);
  } catch (error) {
    return new Error("The book could not be saved");
  }
};

export const getTotalBooksRead = async (kidId: string) => {
  return await db
    .select({ value: count() })
    .from(bookRead)
    .where(eq(bookRead.kid_id, kidId));
};

export const showTotalBooksRead = async () => {
  try {
    return await getTotalBooksRead("35895cdb-96ee-4828-8ef4-7e3ceb5a3048");
  } catch (erroe) {
    return new Error("The books could not be counted");
  }
};

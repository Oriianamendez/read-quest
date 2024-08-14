"use server";

import { eq } from "drizzle-orm";
import { db } from "./index";
import { books, kidAnswers, questions } from "./schema";

export const getQuestions = async (bookId: string) =>
  await db.query.questions.findMany({
    where: eq(questions.book_id, bookId),
  });

export const getBooks = async () => await db.query.books.findMany();

export const saveAnswers = async (answer: string, questionId: string) => {
  await db.insert(kidAnswers).values({
    answer,
    question_id: questionId,
    kid_id: "35895cdb-96ee-4828-8ef4-7e3ceb5a3048",
  });
};

export const handleAnswers = async (formData: FormData) => {
  formData.forEach((answer, questionId) => {
    saveAnswers(answer as string, questionId);
  });
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
    return new Error("Message not sent");
  }
};

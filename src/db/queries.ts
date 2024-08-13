"use server";

import { eq } from "drizzle-orm";
import { db } from "./index";
import { books, questions } from "./schema";

export const getQuestions = async (bookId: string) =>
  await db.query.questions.findMany({
    where: eq(questions.book_id, bookId),
  });

export const getBooks = async () => await db.query.books.findMany();

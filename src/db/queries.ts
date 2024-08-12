"use server";

import { eq } from "drizzle-orm";
import { db } from ".";
import { books, questions } from "./schema";

export async function handleQuestion(formData: FormData) {
  const book = formData.get("book") as string;
  const question1 = formData.get("question1") as string;
  const question2 = formData.get("question2") as string;
  const question3 = formData.get("question3") as string;

  const getBook = await db.query.books.findFirst({
    where: eq(books.name, book),
  });
  const getQuestions = await db.query.questions.findMany({
    where: eq(books.id, questions.book_id),
  });

  if (book === getBook?.name) {
    getQuestions.map((question) => {
      return (
        question1 === question.questions[0] &&
        question2 === question.questions[1] &&
        question3 === question.questions[2]
      );
    });
  }
}

"use server";

import {
  getTotalBooksRead,
  NewBooks,
  saveAnswers,
  saveBookRead,
  saveNewBooks,
} from "@/db/queries";
import { revalidatePath } from "next/cache";

export const handleAnswers = async (formData: FormData) => {
  try {
    formData.forEach(async (answer, questionId) => {
      if (questionId === "book_id_hidden") return;
      await saveAnswers(answer as string, questionId);
    });
    await saveBookRead(formData.get("book_id_hidden") as string);
    revalidatePath("/user");
    return true;
  } catch (error) {
    new Error("The answers could not be saved");
    return false;
  }
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
    revalidatePath("/user");
    return true;
  } catch (error) {
    new Error("The book could not be saved");
    return false;
  }
};

export const showTotalBooksRead = async () => {
  return await getTotalBooksRead("35895cdb-96ee-4828-8ef4-7e3ceb5a3048");
};

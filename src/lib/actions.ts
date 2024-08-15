"use server";

import {
  getTotalBooksRead,
  saveAnswers,
  saveBookRead,
  saveNewBooks,
} from "@/db/queries";
import { revalidatePath } from "next/cache";
import { z } from "zod";

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

const AddNewBook = z.object({
  name: z.string().min(1),
  author: z.string().min(1),
  description: z.string().min(1),
  pages: z.number().min(1),
  points: z.number().min(1),
  age: z.number().min(1),
});

type NewBooksForm = z.infer<typeof AddNewBook>;

export const handleNewBooks = async (formData: FormData) => {
  const newBook: NewBooksForm = {
    name: formData.get("name") as string,
    author: formData.get("author") as string,
    description: formData.get("description") as string,
    pages: Number(formData.get("pages")),
    points: Number(formData.get("points")),
    age: Number(formData.get("age")),
  };

  try {
    const [book] = await saveNewBooks(newBook);
    return { book, success: true };
  } catch (error) {
    new Error("The book could not be saved");
    return { success: false };
  }
};

export const showTotalBooksRead = async () => {
  return await getTotalBooksRead("35895cdb-96ee-4828-8ef4-7e3ceb5a3048");
};

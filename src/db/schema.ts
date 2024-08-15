import { relations } from "drizzle-orm";
import {
  pgTable,
  uuid,
  text,
  integer,
  boolean,
  varchar,
} from "drizzle-orm/pg-core";

export const books = pgTable("books", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  name: text("name").notNull(),
  author: text("author").notNull(),
  description: text("description").notNull(),
  pages: integer("pages").notNull(),
  points: integer("points").notNull(),
  age: integer("age").notNull(),
  read: boolean("read").notNull().default(false),
  image: text("image"),
});

export const bookRead = pgTable("book_read", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  book_id: uuid("book_id")
    .notNull()
    .references(() => books.id),
  kid_id: uuid("kid_id")
    .notNull()
    .references(() => kids.id),
});

export const relationsBookReadBooks = relations(books, ({ many }) => ({
  books: many(bookRead),
}));

export const relationsBooksBookRead = relations(bookRead, ({ one }) => ({
  book: one(books, {
    fields: [bookRead.book_id],
    references: [books.id],
  }),
}));

export const questions = pgTable("questions", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  questions: text("questions").notNull(),
  answer: text("answer").notNull(),
  book_id: uuid("book_id")
    .notNull()
    .references(() => books.id),
});

export const kidAnswers = pgTable("kid_answers", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  answer: text("answer").notNull(),
  question_id: uuid("question_id")
    .notNull()
    .references(() => questions.id),
  kid_id: uuid("kid_id")
    .notNull()
    .references(() => kids.id),
  approved: boolean("approved").notNull().default(false),
});

export const kids = pgTable("kids", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  name: text("name").notNull(),
  parent_id: uuid("parent_id")
    .notNull()
    .references(() => parents.id),
  points: integer("points").notNull().default(0),
});

export const parents = pgTable("parents", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: varchar("password", "20").notNull(),
});

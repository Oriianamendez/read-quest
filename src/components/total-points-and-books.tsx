"use client";

export function TotalPointsAndBooks({ booksRead }: { booksRead: any }) {
  const totalBooksRead = booksRead.length;
  const points = booksRead.reduce((acc: any, bookRead: any) => {
    return acc + bookRead.book.points;
  }, 0);

  return (
    <>
      <div className="gap-10 md:text-3xl font-semibold text-center flex text-xl pt-6 pb-2 text-slate-600">
        <p className="flex flex-col shadow-lg py-4 px-8 rounded-xl bg-yellow-200">
          <span className="text-purple-700 p-2 text-6xl">{points}</span>
          Points
        </p>
        <p className="flex flex-col shadow-lg py-4 px-8 rounded-xl bg-yellow-200">
          <span className="text-purple-700 p-2 text-6xl">{totalBooksRead}</span>
          Books
        </p>
      </div>
    </>
  );
}

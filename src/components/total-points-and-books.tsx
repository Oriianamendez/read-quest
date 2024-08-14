import { showTotalBooksRead } from "@/db/queries";
import { useEffect, useState } from "react";

export function TotalPointsAndBooks() {
  const [data, setData] = useState<number>(0);

  useEffect(() => {
    showTotalBooksRead().then((result) => {
      setData(result[0].value);
    });
  }, []);

  return (
    <>
      <div className="pr-32 py-6 md:text-xl text-xl font-semibold text-center">
        <p>Points</p>
        <p>
          Books
          <span className="text-purple-700 bg-yellow-200 rounded-full p-2">
            {data}
          </span>
        </p>
      </div>
    </>
  );
}

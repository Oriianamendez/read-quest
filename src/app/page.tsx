import { Description } from "@/components/description";
import { TopNavPage } from "@/components/top-nav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <TopNavPage />
      <main className="">
        <Description />
        <article>
          <section>
            <h2>Book name</h2>
            <p>Description of the book</p>
            <p>Points</p>
          </section>
          <section>
            <h2>Book name</h2>
            <p>Description of the book</p>
            <p>Points</p>
          </section>
          <section>
            <h2>Book name</h2>
            <p>Description of the book</p>
            <p>Points</p>
          </section>
        </article>

        <form action="">
          <label>Book</label>
          <input type="text" />
          <label htmlFor="">Question</label>
          <input type="text" />
          <label htmlFor="">Question</label>
          <input type="text" />
          <label htmlFor="">Question</label>
          <input type="text" />
          <button>Get your points</button>
        </form>
      </main>
    </>
  );
}

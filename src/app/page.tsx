import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <p>Logo</p>
          <p>Login</p>
        </nav>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Welcome to ReadQuest</h1>
        <p>This is a description for ReadQuest</p>
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

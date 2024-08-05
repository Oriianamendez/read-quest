import Image from "next/image";

export function Description() {
  return (
    <div className="hero bg-base-200 p-10">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          width={300}
          height={300}
          src="/kid-reading.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="A child reading with different books around"
        />
        <div className="p-4">
          <h1 className="text-5xl font-bold">Welcome to ReadQuest!</h1>
          <p className="py-6">
            Hey kids and parents, welcome to BookNest – the coolest way to track
            and treasure your reading adventures! 🌟📚
          </p>
          <h2 className="text-xl">For kids:</h2>
          <ul>
            <li>
              <strong>Store Your Books:</strong> Easily log every book you read
              and build your own digital bookshelf!
            </li>
            <li>
              <strong>Earn Points: </strong>Answer fun questions about each book
              and earn points for your reading achievements.
            </li>
            <li>
              <strong>Wishlist Rewards:</strong>
              Exchange your points for awesome rewards from your personalized
              wishlist – with a little help from your parents.
            </li>
          </ul>
          <br />
          <h2 className="text-xl">For parents:</h2>
          <ul>
            <li>
              <strong>Encourage Reading:</strong> Motivate your little readers
              by tracking their progress and helping them earn exciting rewards.
            </li>
            <li>
              <strong>Stay Involved:</strong> Review the questions your kids
              answer and join them in their journey through stories. Join
              BookNest today and turn every book into a new adventure! 🎉📖
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

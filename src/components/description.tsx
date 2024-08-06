import Image from "next/image";

export function Description() {
  return (
    <div className="hero bg-yellow-200 p-10">
      <div className="hero-content flex-col lg:flex-row text-black">
        <Image
          width={300}
          height={300}
          src="/kid.png"
          className="rounded-lg pb-8"
          alt="Icon of a kid reading"
          priority
        />
        <div className="p-4">
          <h2 className="text-2xl font-semibold pb-2">KIDS</h2>
          <ul className="leading-7 text-lg">
            <li>
              <strong>Store Your Books</strong> ⮞ Log every book and build a
              digital bookshelf!
            </li>
            <li>
              <strong>Earn Points</strong> ⮞ Answer fun book questions to earn
              points for your reading achievements.
            </li>
            <li>
              <strong>Wishlist Rewards</strong> ⮞ Trade your points for awesome
              rewards from your personalized wishlist.
            </li>
          </ul>
          <br />
          <h2 className="text-2xl font-semibold pb-2">PARENTS</h2>
          <ul className="leading-7 text-lg">
            <li>
              <strong>Encourage Reading</strong> ⮞ Motivate your little readers
              by tracking their progress.
            </li>
            <li>
              <strong>Stay Involved</strong> ⮞ Review the questions your kids
              answer and join them in their journey through stories.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

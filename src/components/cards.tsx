import Image from "next/image";

export function BookCards({
  name,
  author,
  description,
  pages,
  image,
  points,
}: {
  name: string;
  author: string;
  description: string;
  pages: number;
  image: string;
  points: number;
}) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <Image width={150} height={150} src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          <strong>Author: </strong>
          {author}
        </p>
        <p className="pt-2 pb-2">{description}</p>
        <div className="card-actions justify-end">
          <p>
            <strong>Pages: </strong>
            {pages}
          </p>
          <p>
            <strong>Points: </strong>
            {points}
          </p>
        </div>
      </div>
    </div>
  );
}

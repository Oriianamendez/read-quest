import { Checkbox, CTAButton } from "@/components";
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
    <article className="card bg-purple-300 text-slate-600 w-96 shadow-xl gap-4 pt-8 mb-4">
      <figure>
        <Image
          width={130}
          height={180}
          src={image}
          className="rounded-md"
          alt="An image of a book"
          style={{ width: "130px", height: "180px" }}
        />
      </figure>
      <section className="card-body">
        <h2 className="card-title text-3xl text-slate-900">{name}</h2>
        <p>{author}</p>
        <p className="pt-2 pb-2 text-lg text-justify">{description}</p>
        <footer className="card-actions flex justify-between">
          <div className="flex flex-col">
            <p>
              Pages
              <strong className="text-slate-900 text-lg"> {pages}</strong>
            </p>
            <p>
              Points
              <strong className="text-slate-900 text-lg"> {points}</strong>
            </p>
          </div>
          <CTAButton name={"Read"} />
        </footer>
      </section>
    </article>
  );
}

export function BookRead({
  name,
  author,
  pages,
  image,
  points,
}: {
  name: string;
  author: string;
  pages: number;
  image: string;
  points: number;
}) {
  return (
    <article className="card bg-purple-300 text-slate-600 w-80 shadow-xl gap-2 pt-6 mb-4">
      <figure>
        <Image
          width={100}
          height={150}
          src={image}
          className="rounded-md"
          alt="An image of a book"
          style={{ width: "130px", height: "180px" }}
        />
      </figure>
      <section className="card-body">
        <h2 className="card-title text-3xl text-slate-900">{name}</h2>
        <p>{author}</p>
        <footer className="card-actions flex justify-between">
          <div className="flex flex-col">
            <p>
              Pages
              <strong className="text-slate-900 text-lg"> {pages}</strong>
            </p>
            <p>
              Points
              <strong className="text-slate-900 text-lg"> {points}</strong>
            </p>
          </div>
          <Checkbox />
        </footer>
      </section>
    </article>
  );
}

import Image from "next/image";

export function Header() {
  return (
    <div className="hero bg-yellow-200 p-10 pt-24">
      <div className="hero-content flex flex-col lg:flex-row text-black ">
        <div className="p-4 text-center">
          <h1 className="md:text-8xl text-5xl font-bold">
            Welcome to ReadQuest!{" "}
          </h1>
          <p className="py-6 md:text-3xl text-xl font-semibold">
            The coolest way to track and treasure your reading adventures!
          </p>
          <div className="flex justify-center pt-8">
            <Image
              width={150}
              height={150}
              src="/book-stack.png"
              className="rounded-lg pb-8"
              alt="Icon of a kid reading"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

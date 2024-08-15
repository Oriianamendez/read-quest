import Image from "next/image";

export function Header() {
  return (
    <div className="hero bg-white pt-10">
      <div className="hero-content flex flex-col lg:flex-row text-black ">
        <div className="p-4 text-center">
          <h1 className="md:text-8xl text-5xl font-bold text-purple-900">
            Welcome to ReadQuest!
          </h1>
          <p className="py-6 md:text-3xl text-xl font-semibold text-purple-900">
            The coolest way to track and treasure your reading adventures!
          </p>
          <div className="flex justify-center">
            <Image
              width={700}
              height={700}
              src="/kids-reading.png"
              className="rounded-lg"
              alt="Icon of a kid reading"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeaderForUser() {
  return (
    <div className="hero">
      <div className="hero-content flex flex-col lg:flex-row text-black ">
        <div className="p-4 text-center">
          <h1 className="md:text-7xl text-5xl font-bold">Welcome User!</h1>
          <p className="py-6 md:text-xl text-xl font-semibold">
            Track and treasure your reading adventures
          </p>
        </div>
      </div>
    </div>
  );
}

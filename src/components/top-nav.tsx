import Image from "next/image";
import Link from "next/link";
import { NewBookModal } from "./new-book-modal";
import { Suspense } from "react";
import { TotalPointsAndBooks } from "./total-points-and-books";

export function TopNav() {
  return (
    <header>
      <nav className="navbar bg-yellow-200 ">
        <div className="flex-1 justify-between">
          <Link href={"/"} className="btn btn-ghost text-xl">
            <Image src="/logo.png" width={45} height={45} alt="Logo" />
          </Link>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar items-center"
          >
            <div className="w-10 rounded-full">
              <Image
                src="/login-icon.png"
                width={45}
                height={45}
                alt="Login icon"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export function TopNavUser() {
  return (
    <header>
      <nav className="navbar bg-yellow-200 ">
        <div className="flex-1 justify-between">
          <Link href={"/"} className="btn btn-ghost text-xl">
            <Image src="/logo.png" width={45} height={45} alt="Logo" />
          </Link>
          <Suspense fallback={<p className="text-black">Loading points...</p>}>
            <TotalPointsAndBooks />
          </Suspense>
          <div tabIndex={0} role="button" className="flex items-center ">
            <div className="">
              <NewBookModal />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

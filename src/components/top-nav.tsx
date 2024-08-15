"use client";

import Image from "next/image";
import Link from "next/link";
import { NewBookModal } from "./new-book-modal";

export function TopNav() {
  return (
    <header>
      <nav className="navbar bg-white ">
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

export function TopNavUser({ updateBooks }: { updateBooks: any }) {
  return (
    <header>
      <nav className="navbar">
        <div className="flex-1 justify-between">
          <Link href={"/"} className="btn btn-ghost text-xl">
            <Image src="/logo.png" width={45} height={45} alt="Logo" />
          </Link>
          <div tabIndex={0} role="button" className="flex items-center ">
            <div>
              <NewBookModal updateBooks={updateBooks} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

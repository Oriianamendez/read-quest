import Image from "next/image";
import Link from "next/link";

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

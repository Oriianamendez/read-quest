import Image from "next/image";

export function TopNavPage() {
  return (
    <header>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">ReadQuest</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  src="/login-icon.png"
                  width={40}
                  height={40}
                  alt="Login icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

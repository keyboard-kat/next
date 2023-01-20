import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="navbar border-b-slate-300 shadow-sm">
        <div className="navbar-start px-2">
          <h1 className="text-xl">
            <Link href="/">ds</Link>
          </h1>
        </div>
        <div className="navbar-center mx-auto gap-4">
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/about">About</Link>
          </div>
          <div>
            <Link href="/comments">Comments</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

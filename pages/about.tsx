import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="hero min-h-auto pt-20">
        <div className="hero-content flex-col lg:flex-row px-8 space-x-4">
          <div className="px-4">
            <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight  ">
              About
            </h1>

            <p className="mt-6 text-xl text-slate-700 font-light max-w-4xl mx-auto leading-relaxed tracking-wide">
              I'm a software engineer who loves React. I created this portfolio with{" "}
              <span className="text-indigo-500 ">Next.js</span> a React framework that comes with
              added tooling.
            </p>
            <h2 className="text-slate-900 font-extrabold text-3xl  tracking-tight my-4">
              Features
            </h2>
            <ul className="text-xl space-y-2">
              <li>Typescript </li>
              <li>Tailwind CSS</li>
              <li>daisyUI</li>
            </ul>
          </div>{" "}
        </div>
      </div>
      <div className="xs:w-11/12 md:w-4/6 container m-auto py-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 text-md">
          <div className="card p-5 bg-indigo-200 glass shadow-md">
            <h2 className="text-2xl font-semibold ">
              <span className="pr-2 text-xl">&#8592;</span>
              <Link href="/">Home</Link>
            </h2>
          </div>

          <div className="card p-5 bg-indigo-200 glass shadow-md">
            <h2 className="text-2xl font-semibold">
              <Link href="/comments">Comments</Link>
              <span className="pl-2 text-xl">&#8594;</span>
            </h2>
            <p>Leave a comment. Make a post request.</p>
          </div>
        </div>
      </div>
    </>
  );
}

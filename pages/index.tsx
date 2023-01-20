import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="hero min-h-auto pt-20">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-7xl tracking-tight text-center ">
              Welcome
            </h1>
            <p className="mt-6 text-xl text-slate-700 font-light text-center max-w-4xl mx-auto leading-relaxed tracking-wide">
              This is a simple implementation of <span className="text-indigo-500 ">Next.js </span>
              with routing, API integration and server side rendering.
            </p>
            <div className="mt-12 sm:mt-10 flex justify-center space-x-2 ">
              <div
                className="border-dotted rounded border-2 border-indigo-400
               text-indigo-800 font-light hidden text-xl leading-relaxed
                 tracking-wide sm:flex items-center text-left space-x-3 px-6 h-12"
              >
                Want to learn more and see it in action?
              </div>
              <Link href="/about">
                <button
                  className="btn btn-primary text-white tracking-wide h-12
                flex items-center justify-center sm:w-auto
                "
                >
                  get started <span className="pl-2 text-xl">&#8594;</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="xs:w-11/12 md:w-4/6 container m-auto py-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 text-md">
          <div className="card p-5 bg-indigo-200 glass shadow-md">
            <h2 className={inter.className && "text-2xl font-semibold "}>
              <Link href="/about">About</Link>
              <span className="pl-2 text-xl">&#8594;</span>
            </h2>
            <p className={inter.className}>Some info on features being used on this app.</p>
          </div>

          <div className="card p-5 bg-indigo-200 glass shadow-md">
            <h2 className={inter.className && "text-2xl font-semibold"}>
              <Link href="/comments">Comments</Link>
              <span className="pl-2 text-xl">&#8594;</span>
            </h2>
            <p className={inter.className}>
              Leave your feedback. Make a post request with your comment and see what others have to
              say.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

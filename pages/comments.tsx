import Link from "next/link";
import type { InferGetServerSidePropsType } from "next";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import photo from "../public/death_valley.jpg";

export default function Comments({
  comments,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const router = useRouter();

  const [formVals, setFormVals] = useState({
    name: "",
    comment: "",
  });

  useEffect(() => {
    setIsRefreshing(false);
  }, [comments, isRefreshing]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await fetch(`${process.env.NEXT_PUBLIC_COMMENTS_API}`, {
        method: "POST",
        body: JSON.stringify({ ...formVals }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      router.replace(router.asPath);
      setIsRefreshing(true);
      setFormVals({ name: "", comment: "" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="hero min-h-fit ">
        <div className="hero-content ">
          <div className="rounded-xl bg-white shadow-xl ring-1 ring-slate-900/5 overflow-hidden">
            <Image src={photo} alt="Picture of Death Valley" width={780} placeholder="blur" />
            <div className="relative mt-4 flex-col lg:flex-row px-8">
              <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight   ">
                Have any feedback?
              </h1>
              <p className="mt-6 text-xl text-slate-700 font-light max-w-4xl mx-auto leading-relaxed tracking-wide pb-3  ">
                Write a comment below.
              </p>
            </div>
            <form onSubmit={onSubmit} className="px-8 py-5 bg-indigo-100  ">
              <div className="py-1 ">
                <label className="">Name</label>
                <input
                  type="text"
                  className="flex w-full h-9 p-1 rounded resize-y placeholder-gray-500
                 focus:outline-offset-1 focus:outline-1 focus:outline-indigo-400"
                  onChange={(e) => setFormVals({ ...formVals, name: e.target.value })}
                />
              </div>
              <div className="py-1">
                <label>Comment</label>
                <textarea
                  className="flex w-full max-h-16 p-1 rounded resize-y placeholder-gray-500
                focus:outline-offset-1 focus:outline-1 focus:outline-indigo-400"
                  onChange={(e) => setFormVals({ ...formVals, comment: e.target.value })}
                />
              </div>

              <div className="flex items-center mt-4">
                <button
                  type="submit"
                  disabled={!formVals.name || !formVals.comment}
                  className="btn btn-primary text-white max-h-8
                "
                >
                  Submit
                </button>
              </div>
            </form>
            <section>
              <div className="container divide-y divide-slate-100">
                <header className="px-8 py-4  ">
                  <h2 className="font-semibold">Comments</h2>
                </header>

                {isRefreshing && (
                  <div className=" flex space-x-1 px-10 py-8 mx-auto">
                    <div className="bg-indigo-300 p-2  w-3 h-3 rounded-full animate-bounce"></div>
                    <div className="bg-purple-300 p-2 w-3 h-3 rounded-full animate-bounce"></div>
                    <div className="bg-pink-300 p-2  w-3 h-3 rounded-full animate-bounce"></div>
                  </div>
                )}

                <ul className="divide-y divide-slate-100">
                  {comments &&
                    comments.map((c) => (
                      <article className="flex items-start space-x-6 px-8 py-6" key={c.id}>
                        <div className="avatar bg-indigo-200 rounded-xl mask mask-circle w-10 h-10">
                          <div className=" "></div>
                        </div>
                        <div className="min-w-0 relative flex-auto">
                          <div className="font-semibold">{c.name}</div>
                          <p>{c.comment}</p>
                        </div>
                      </article>
                    ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="xs:w-11/12 md:w-4/6 container m-auto py-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 text-md">
          <div className="card p-5 bg-indigo-200 glass shadow-md">
            <h2 className={"text-2xl font-semibold "}>
              <span className="pr-2 text-xl">&#8592;</span>
              <Link href="/about">About</Link>
            </h2>
            <p>Some info on features being used on this app.</p>
          </div>

          <div className="card p-5 bg-indigo-200 glass shadow-md">
            <h2 className={"text-2xl font-semibold"}>
              <Link href="/">Home</Link>
              <span className="pl-2 text-xl">&#8594;</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

interface comment {
  id: number;
  name: string;
  comment: string;
}

export async function getServerSideProps(): Promise<{
  props: {
    comments: comment[];
  };
}> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_COMMENTS_API}`);
  if (!res.ok) {
    throw await res.json();
  }
  let data = await res.json();

  return {
    props: { comments: data.reverse() },
  };
}

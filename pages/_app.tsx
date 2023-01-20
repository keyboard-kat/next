import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/styles/globals.css";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      data-theme="custom"
      className={
        inter.className && "bg-gradient-to-r from-indigo-300 via-purple-300/50 to-pink-100"
      }
    >
      <Head>
        <title>ds</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="app" content="Next.js app with API integration and comments" />
      </Head>
      <Header />

      <main className="pt-4 mb-20 space-y-20 overflow-hidden sm:mb-24 sm:space-y-24 md:mb-32 md:space-y-32 ">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

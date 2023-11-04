import About from "@/components/About";
import Introduction from "@/components/Introduction/Introduction";
import Projects from "@/components/Projects";
import ViewCheck from "@/components/ViewCheck";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <meta
          property="og:title"
          content="UX/UI Designer • Front-End Developer"
        />
        <meta
          property="og:description"
          content="Harrison Walton - Web development portfolio"
        />
        <meta
          property="og:image"
          content="https://harrison-walton-portfolio-fuglyuckdev.vercel.app/images/metadata/portfolio_og.webp"
        />
      </Head>
      <Introduction />
      <About />
      <Projects />
      <ViewCheck />
    </main>
  );
}

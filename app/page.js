import About from "@/components/About";
import Introduction from "@/components/Introduction/Introduction";
import Projects from "@/components/Projects";
import ViewCheck from "@/components/ViewCheck";

export default function Home() {
  return (
    <main>
      <Introduction />
      <About />
      <Projects />
      <ViewCheck />
    </main>
  );
}

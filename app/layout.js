import CursorArt from "@/components/CursorArt";
import styles from "./globals.scss";
import Navigation from "@/components/Navigation/Navigation";
import rehypeHighlight from "rehype-highlight";
import "./styles/github-dark.css";

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
};

export const metadata = {
  title: "Harrison Walton - Front End Portfolio",
  description: "UX/UI Designer • Front-End Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CursorArt />
        <Navigation />
        {children}
      </body>
    </html>
  );
}

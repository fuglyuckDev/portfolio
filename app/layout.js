import Head from "next/head";
import styles from "./globals.scss";
import Navigation from "@/components/Navigation/Navigation";

export const metadata = [
  { content: "Harrison Walton - Front End Portfolio", type: "title" },
  { content: "UX/UI Designer • Front-End Developer", type: "description" },
  {
    content:
      "https://harrison-walton-portfolio-fuglyuckdev.vercel.app/images/metadata/portfolio_og.webp",
    type: "og:image",
  },
  {
    content: "Function, form and everything in between.",
    type: "og:description",
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata[0].content}</title>
        <meta
          name={metadata[1].type}
          key={metadata[1].type}
          content={metadata[1].content}
        />
        {metadata.map((item, idx) => (
          <meta property={item.type} content={item.content}></meta>
        ))}
      </Head>

      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

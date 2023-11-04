import styles from "./globals.scss";
import Navigation from "@/components/Navigation/Navigation";

export const metadata = {
  title: "Harrison Walton - Front End Portfolio",
  description: "UX/UI Designer • Front-End Developer",
  "og:image":
    "https://harrison-walton-portfolio-fuglyuckdev.vercel.app/images/metadata/portfolio_og.webp",
  "og:description": "Function, form and everything in between.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

import CursorArt from "@/components/CursorArt";
import styles from "./globals.scss";
import Navigation from "@/components/Navigation/Navigation";

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

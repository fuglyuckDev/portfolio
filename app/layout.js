import styles from "./globals.scss";
import Navigation from "@/components/Navigation/Navigation";

export const metadata = {
  title: "Harrison Walton - Front End Portfolio",
  description: "",
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

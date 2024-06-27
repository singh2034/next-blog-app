import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Blogger - Be Mind Blogging!",
  description:
    "Blogger is a platform where you can share your feelings whatever you have.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

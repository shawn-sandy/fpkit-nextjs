import "@shawnsandy/first-paint/dist/css/libs/all.min.css";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar>
          <div>
            <a href="/">Home</a>
          </div>
          <ul>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </Navbar>
        {children}
      </body>
    </html>
  );
}

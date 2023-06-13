import "@shawnsandy/first-paint/dist/css/libs/all.min.css";
import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@fpkit/nextra";
import { Title } from "@fpkit/react";

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
        <Header>
          <section>
            <Title styles={{ "--fs": "var(--fs-10)" }}>Header Section</Title>
            <p>
              Labore est esse et nulla anim labore consequat veniam cupidatat
              laborum adipisicing.
            </p>
            <p>
              <button type="button">Default Button</button>
            </p>
          </section>
        </Header>
        {children}
      </body>
    </html>
  );
}

import type { NextraThemeLayoutProps } from "nextra";
import "@shawnsandy/first-paint/dist/css/libs/all.min.css";
import { PG } from "@fpkit/nextjs";
import { Text } from "@fpkit/react";
import Nav from "@/components/navbar";
import Footer from "@/components/footer";
export default function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
  const { pageMap } = pageOpts;

  return (
    <PG>
      <Nav />
      <PG.Header title="Header Section">
        <Text>
          Blog - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Text>
      </PG.Header>
      <PG.Main>{children}</PG.Main>
      <Footer />
    </PG>
  );
}

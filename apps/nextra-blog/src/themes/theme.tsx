import type { NextraThemeLayoutProps } from "nextra";
import React from "react";

import Nav from "../components/nav";
import { ThemeMain, ThemeHeader, ThemeFooter } from "@fpkit/nextjs";

import "@shawnsandy/first-paint/dist/css/libs/all.min.css";

export default function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
  const { pageMap } = pageOpts;

  return (
    <>
      <Nav />
      <ThemeHeader title="FPKIT.NEXT" ctaLink="/" ctaLabel="" />
      <ThemeMain>{children}</ThemeMain>
      <ThemeFooter />
    </>
  );
}

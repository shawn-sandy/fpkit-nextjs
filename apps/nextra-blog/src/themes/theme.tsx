import type { NextraThemeLayoutProps } from "nextra";
import React from "react";

import Nav from "../components/nav";
import { ThemeMain, ThemeHeader, ThemeFooter } from "@fpkit/nextjs";
import { usePageOpts } from "@fpkit/nextjs/libs/hooks";
import "@shawnsandy/first-paint/dist/css/libs/all.min.css";

export default function Layout({
  children,
  pageOpts,
  themeConfig,
}: NextraThemeLayoutProps) {
  const { pageMap } = pageOpts;
  const { dirList, postList } = usePageOpts({ options: { pageOpts } });
  const posts = postList.map((item) => item?.frontMatter);

  return (
    <>
      <Nav brand={themeConfig.brand} navList={dirList} />
      <ThemeHeader title="FPKit Next" ctaLink="/" ctaLabel="" />
      <ThemeMain>{children}</ThemeMain>
      <ThemeFooter />
    </>
  );
}

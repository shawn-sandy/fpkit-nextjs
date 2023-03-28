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
  // @ts-ignore
  const { dirList, postList } = usePageOpts({ options: { pageOpts } });
  const posts = postList.map((item) => item?.frontMatter);
  const banner = themeConfig.banner;

  return (
    <>
      <Nav brand={themeConfig.brand} navList={dirList} />
      <ThemeHeader
        title={banner.title}
        link={banner.link}
        linkLabel={banner.linkLabel}
        description={banner.description}
      />
      <ThemeMain>{children}</ThemeMain>
      <ThemeFooter />
    </>
  );
}

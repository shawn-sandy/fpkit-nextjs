import type { NextraThemeLayoutProps } from "nextra";
import useBlogContext from "nextra-theme-blog";
import React from "react";

import {
  ThemeMain,
  ThemeHeader,
  ThemeFooter,
  PostsList,
  NavList,
  Nav,
  NavBrand,
  FilterMdxPages,
  FilterPageType,
} from "@fpkit/nextjs";

import { usePageOpts, useConfig } from "@fpkit/nextjs/libs/hooks";
import { MDXProvider } from "nextra/mdx";
import "@shawnsandy/first-paint/dist/css/libs/all.min.css";

export default function Layout({
  children,
  pageOpts,
  themeConfig,
}: NextraThemeLayoutProps) {
  const { pageMap } = pageOpts;

  const banner = themeConfig.banner;
  const latestPosts = FilterMdxPages(pageMap);
  const pages = FilterPageType(pageMap);

  console.log("pages", pages);

  return (
    <>
      <Nav>
        <NavBrand logo={themeConfig.brand.logo} url={themeConfig.brand.url} />
        <NavList pages={pages} />
      </Nav>

      <ThemeHeader
        title={banner.title}
        link={banner.link}
        linkLabel={banner.linkLabel}
        description={banner.description}
      />

      <ThemeMain>
        {pageOpts.route === "/" && latestPosts.length > 0 ? (
          <PostsList postList={latestPosts} showDescription />
        ) : (
          <MDXProvider components={themeConfig.components}>
            {children}
          </MDXProvider>
        )}
      </ThemeMain>

      <ThemeFooter />
    </>
  );
}

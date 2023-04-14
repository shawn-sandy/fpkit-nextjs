import type { NextraThemeLayoutProps } from "nextra";
import Head from "next/head";
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
  const { pageMap, title } = pageOpts;

  const banner = themeConfig.banner;
  const latestPosts = FilterMdxPages(pageMap);
  const pages = FilterPageType(pageMap);

  return (
    <>
      <Head>
        <title>{`${themeConfig.siteName} - ${title}`}</title>
        <script src="https://unpkg.com/shiki"></script>

        <script src="https://cdn.jsdelivr.net/npm/shiki"></script>
        <link rel="stylesheet" href="./highlight.css" />
      </Head>
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

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
} from "@fpkit/nextjs";

import { usePageOpts, useConfig } from "@fpkit/nextjs/libs/hooks";
import { FilterMdxPages, FilterPageType } from "@fpkit/nextjs/libs/libs";
import { MDXProvider } from "nextra/mdx";
import "@shawnsandy/first-paint/dist/css/libs/all.min.css";

export default function Layout({
  children,
  pageOpts,
  themeConfig,
}: NextraThemeLayoutProps) {
  const { pageMap } = pageOpts;
  const { dirList, postList, pageList, pages, latestPosts } = usePageOpts({
    options: { pageOpts },
  });

  const banner = themeConfig.banner;
  // const latest = FilterMdxPages(pageMap);
  // const pages = FilterPageType(pageMap);

  return (
    <>
      <Nav>
        <NavBrand logo={themeConfig.brand.logo} url={themeConfig.brand.url} />
        <NavList pageList={pages} />
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

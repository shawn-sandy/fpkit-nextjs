import type { NextraThemeLayoutProps } from "nextra";
import Head from "next/head";
import { useConfig } from "nextra-theme-docs";
import React from "react";
import { getPagesUnderRoute, getAllPages } from "nextra/context";

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
  Toc,
} from "@fpkit/nextra";

import { MDXProvider } from "nextra/mdx";
import "@shawnsandy/first-paint/dist/css/libs/all.min.css";

export default function Layout({
  children,
  pageOpts,
  themeConfig,
}: NextraThemeLayoutProps) {
  const { pageMap, title, headings } = pageOpts;
  // console.log(getPagesUnderRoute("/posts"));
  // console.log(getAllPages());

  const banner = themeConfig.banner;
  const latestPosts = FilterMdxPages(pageMap);
  const pages = FilterPageType(pageMap);

  const SideBar = () => {
    return (
      <>
        <Toc items={headings} />
        <div>
          <h3 data-fp-text="h3">Recent Posts</h3>
          <PostsList postList={latestPosts} />
        </div>
      </>
    );
  };

  return (
    <>
      <Head>
        <title>{`${themeConfig.siteName} - ${title}`}</title>
      </Head>

      <ThemeHeader
        title={banner.title}
        link={banner.link}
        linkLabel={banner.linkLabel}
        description={banner.description}
      />

      <ThemeMain sideBar={<SideBar />}>
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

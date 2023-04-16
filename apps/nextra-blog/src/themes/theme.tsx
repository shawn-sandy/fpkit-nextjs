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
  Toc,
} from "@fpkit/nextra";

import { Tag } from "@fpkit/react";

import { usePageOpts, useConfig } from "@fpkit/nextra/libs/hooks";
import { MDXProvider } from "nextra/mdx";
import "@shawnsandy/first-paint/dist/css/libs/all.min.css";

export default function Layout({
  children,
  pageOpts,
  themeConfig,
}: NextraThemeLayoutProps) {
  const { pageMap, title, headings } = pageOpts;

  const banner = themeConfig.banner;
  const latestPosts = FilterMdxPages(pageMap);
  const pages = FilterPageType(pageMap);

  const SideBar = () => {
    return (
      <>
        {" "}
        <Toc items={headings} />
        <Tag>
          <Tag as="h3" data-fp-text="h3">
            Recent Posts
          </Tag>
          <PostsList postList={latestPosts} />
        </Tag>
      </>
    );
  };

  return (
    <>
      <Head>
        <title>{`${themeConfig.siteName} - ${title}`}</title>
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

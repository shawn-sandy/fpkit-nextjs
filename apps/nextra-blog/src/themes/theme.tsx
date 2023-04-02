import type { NextraThemeLayoutProps } from "nextra";
import useBlogContext from "nextra-theme-blog";
import React from "react";

import {
  ThemeMain,
  ThemeHeader,
  ThemeFooter,
  PostsList,
  Navigation,
  NavList,
  Nav,
  NavBrand,
} from "@fpkit/nextjs";

import { usePageOpts, useConfig } from "@fpkit/nextjs/libs/hooks";
import { FilterMdxPages } from "@fpkit/nextjs/libs/libs";
import { MDXProvider } from "nextra/mdx";
import "@shawnsandy/first-paint/dist/css/libs/all.min.css";

export default function Layout({
  children,
  pageOpts,
  themeConfig,
}: NextraThemeLayoutProps) {
  const { pageMap } = pageOpts;
  const { dirList, postList, pageList } = usePageOpts({
    options: { pageOpts },
  });
  // @ts-ignore
  const posts = postList.map((item) => item?.frontMatter);
  const banner = themeConfig.banner;

  const latest = FilterMdxPages(pageMap);

  return (
    <>
      <Nav>
        <NavBrand logo={themeConfig.brand.logo} url={themeConfig.brand.logo} />
        <NavList pageList={pageList} />
      </Nav>

      <ThemeHeader
        title={banner.title}
        link={banner.link}
        linkLabel={banner.linkLabel}
        description={banner.description}
      />
      <ThemeMain>
        {pageOpts.route === "/" && latest.length > 0 ? (
          <PostsList postList={latest} showDescription />
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

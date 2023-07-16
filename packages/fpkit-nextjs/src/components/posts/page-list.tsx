import { getPagesUnderRoute, getAllPages } from "nextra/context";
import React from "react";
import { Page, MdxFile } from "nextra";
import { ArticleList } from "./article-list";

/**
 * An object representing the data required to render a list of pages.
 */
export type PageListTypes = {
  /**
   * The group of pages to render.
   */
  group?: string;
  /**
   * An array of pages to render.
   */
  data: Page[];
  /**
   * An optional object containing custom styles to apply to the component.
   */
  styles?: {};
};

/*
 * PageList
 *
 * @param {PageListTypes} data - An object representing the data required to render a list of pages.
 * @param {string} [data.group] - The group of pages to render.
 * @param {Page[]} data.data - An array of pages to render.
 *
 * Renders a list of pages. If no pages are found, returns null.
 * Maps over the array of pages and renders an <ArticleList> component for each page.
 * @example <PageList data={pages} />
 */
export const PageList = ({ data, styles, ...props }: PageListTypes) => {
  if (data.length <= 0) return null;

  return (
    <>
      {data?.map((page) => (
        <>
          <ArticleList
            key={page.route}
            // @ts-ignore
            title={page.frontMatter?.title}
            route={page.route}
            // @ts-ignore
            description={page?.frontMatter?.description}
            styles={styles}
            {...props}
          />
          <hr />
        </>
      ))}
    </>
  );
};

export default PageList;

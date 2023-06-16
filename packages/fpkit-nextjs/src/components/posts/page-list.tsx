import { getPagesUnderRoute, getAllPages } from "nextra/context";
import React from "react";
import { Page, MdxFile } from "nextra";
import { ArticleList } from "./article-list";

export type PageListTypes = {
  group?: string;
  data: Page[];
};

export const PageList = ({ data, group }: PageListTypes) => {
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
          />
          <hr />
        </>
      ))}
    </>
  );
};

export default PageList;

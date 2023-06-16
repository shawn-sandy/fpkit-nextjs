import { NextraThemeLayoutProps, PageMapItem } from "nextra";
import FilterMdxPages, { FilterPageType } from "../libs/filter-mdx-pages";

export type optsTypes = {
  options: Pick<NextraThemeLayoutProps, "pageOpts">;
};

export const usePageOpts = ({ options }: optsTypes) => {
  const { pageOpts } = options;

  const { pageMap } = pageOpts;

  if (!pageMap) {
    return {
      contentDirs: [],
      postList: [],
      posts: [],
      pageList: [],
      latestPosts: [],
      pages: [],
    };
  }

  const postList = pageMap.filter(
    (item: PageMapItem) =>
      item.kind === "MdxPage" &&
      item.route !== "/" &&
      item.frontMatter !== undefined
  );

  const pageList: PageMapItem[] = pageMap.filter(
    (item: PageMapItem) =>
      item.kind === "MdxPage" && item.frontMatter?.type === "page"
  );

  const dirList: PageMapItem[] = pageMap.filter(
    (item: PageMapItem) => item.kind === "Folder"
  );

  const latestPosts = FilterMdxPages(pageMap);
  const pages = FilterPageType(pageMap);

  return { dirList, postList, pageList, latestPosts, pages };
};

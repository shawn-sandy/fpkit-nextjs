import { NextraThemeLayoutProps, PageMapItem } from "nextra";

export type optsTypes = {
  options: Pick<NextraThemeLayoutProps, "pageOpts">;
};

export const usePageOpts = ({ options }: optsTypes) => {
  const { pageOpts } = options;

  const { pageMap } = pageOpts;

  if (!pageMap) {
    return { contentDirs: [], postList: [], posts: [] };
  }

  const postList = pageMap.filter(
    (item: PageMapItem) =>
      item.kind === "MdxPage" &&
      item.route !== "/" &&
      item.frontMatter !== undefined
  );

  const dirList = pageMap.filter(
    (item: { kind: string }) => item.kind === "Folder"
  );

  return { dirList, postList };
};

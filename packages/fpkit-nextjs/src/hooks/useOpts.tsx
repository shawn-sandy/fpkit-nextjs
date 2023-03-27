import { PageOpts, NextraThemeLayoutProps } from "nextra";

export type optsTypes = {
  options: Pick<NextraThemeLayoutProps, "pageOpts">;
};

export const usePageOpts = ({ options }: optsTypes) => {
  const { pageOpts } = options;

  const { pageMap, frontMatter } = pageOpts;

  if (!pageMap) {
    return { contentDirs: [], postList: [], posts: [] };
  }

  const postList = pageMap.filter(
    (item) =>
      item.kind === "MdxPage" &&
      item.route !== "/" &&
      item.frontMatter !== undefined
  );

  // const posts = postList.filter((item) => item?.frontMatter === true);

  const dirList = pageMap.filter(
    (item: { kind: string }) => item.kind === "Folder"
  );

  return { dirList, postList };
};

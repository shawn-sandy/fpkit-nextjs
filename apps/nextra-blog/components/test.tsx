import { getPagesUnderRoute, getAllPages } from "nextra/context";
import { PageList } from "@fpkit/nextjs";
import { PostsList } from "@fpkit/nextjs";
export const Test = ({ frontMatter }) => {
  const pages = getAllPages();
  console.log({ pages });
  return <PostsList postList={getAllPages()} showDescription />;
};

export default Test;

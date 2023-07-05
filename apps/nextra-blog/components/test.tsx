import { getPagesUnderRoute, getAllPages } from "nextra/context";
import { PageList } from "@fpkit/nextjs";
export const Test = ({ frontMatter }) => {
  const pages = getAllPages();
  console.log({ pages });
  return <PageList data={getAllPages()} />;
};

export default Test;

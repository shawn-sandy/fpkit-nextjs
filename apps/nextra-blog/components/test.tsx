import { getPagesUnderRoute, getAllPages } from "nextra/context";
import { PageList } from "@fpkit/nextra";
export const Test = ({ frontMatter }) => {
  return <PageList data={getPagesUnderRoute("/posts")} />;
};

export default Test;

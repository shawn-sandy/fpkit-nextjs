import { getPagesUnderRoute, getAllPages } from "nextra/context";
export const Test = ({ frontMatter }) => {
  //inside a component

  console.log("pages", getPagesUnderRoute("/posts"));

  console.log(getAllPages());

  return (
    <div>
      <h1>Test component</h1>
    </div>
  );
};

export default Test;

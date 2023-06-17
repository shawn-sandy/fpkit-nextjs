import React from "react";

import { Section, Main, Article, Aside } from "./landmarks";
export type MainProps = {
  children: React.ReactNode;
  sideBar?: React.ReactNode;
  mainStyles?: {};
  classes?: string;
};

export const PageMain = ({
  children,
  sideBar,
  mainStyles,
  classes,
}: MainProps) => {
  return (
    <Main>
      <Section data-content>
        <Article>{children}</Article>
        <Aside>{sideBar || "Sidebar"}</Aside>
      </Section>
    </Main>
  );
};

export default PageMain;
PageMain.displayName = "Main";
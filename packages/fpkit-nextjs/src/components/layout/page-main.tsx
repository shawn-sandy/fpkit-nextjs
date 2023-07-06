import React from "react";

import { Section, Main, Article, Aside } from "./landmarks";
export type MainProps = {
  children: React.ReactNode;
  sideBar?: React.ReactNode;
  styles?: {};
  classes?: string;
};

/**
 * The main content section of a page.
 * @param children - The content to be displayed in the main section.
 * @param sideBar - The content to be displayed in the sidebar section.
 * @param styles - Additional styles to be applied to the main section.
 * @param classes - Additional classes to be applied to the main section.
 * @example <PageMain>Content</PageMain>
 * @example <PageMain sideBar={<Sidebar/>}>Content</PageMain>
 * @returns The main content section of a page.
 */
export const PageMain = ({ children, sideBar, styles, classes }: MainProps) => {
  return (
    <Main styles={styles}>
      <Section data-content>
        <Article>{children}</Article>
        <Aside>{sideBar}</Aside>
      </Section>
    </Main>
  );
};

export default PageMain;
PageMain.displayName = "Main";

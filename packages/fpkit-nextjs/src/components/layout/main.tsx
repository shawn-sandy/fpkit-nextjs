import React from "react";

import { Section, Main } from "./landmarks";
export type MainProps = {
  children: React.ReactNode;
  mainStyles?: {};
  classes?: string;
};

export const MainHeader = ({ children, mainStyles, classes }: MainProps) => {
  return (
    <Main>
      <Section>{children}</Section>
    </Main>
  );
};

export default MainHeader;
MainHeader.displayName = "Main";

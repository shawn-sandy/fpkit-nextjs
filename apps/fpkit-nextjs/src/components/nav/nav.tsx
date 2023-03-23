import React, { Children } from "react";

import { Tag } from "@fpkit/react";

export type NavProps = {
  children?: React.ReactNode;
};

export const Nav = ({ children }: NavProps) => {
  return (
    <>
      <Tag as="nav">{children}</Tag>
    </>
  );
};

export default Nav;
Nav.displayName = "Nav";

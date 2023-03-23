/**
 * Nav component
 *
 * The Nav component is used to wrap a group of links that are related
 * to each other. The Nav component is used by the Header component.
 *
 * @param {NavProps} props
 * @returns {JSX.Element}
 */

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

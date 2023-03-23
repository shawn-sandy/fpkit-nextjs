/**
 * Nav component
 *
 * The Nav component is used to wrap a group of links that are related
 * to each other. The Nav component is used by the Header component.
 */

import React from "react";

import { Tag } from "@fpkit/react";
import Link from "next/link";

export type NavItemProps = {
  route: string;
  children: React.ReactNode;
};

/**
 * NavItem component creates a navigation link element wrapped in a list item `li`
 * @param param0
 * @returns
 */
export const NavItem = ({ route, children, ...props }: NavItemProps) => {
  return (
    <>
      <Tag as="li" {...props}>
        <a href={route}>{children}</a>
      </Tag>
    </>
  );
};

export type NavProps = {
  children?: React.ReactNode;
};

/**
 * Nav component creates a navigation element
 * @param param0
 * @returns
 */
export const Nav = ({ children, ...props }: NavProps) => {
  return (
    <>
      <Tag as="nav" {...props}>
        {children}
      </Tag>
    </>
  );
};

/**
 * Exports
 */
export default Nav;
Nav.displayName = "Nav";

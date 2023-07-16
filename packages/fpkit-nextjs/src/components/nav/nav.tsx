import React from "react";

import { Tag } from "@fpkit/react";

export type NavItemProps = {
  route: string;
  styles?: {};
  children?: React.ReactNode;
};

/**
 * NavItem component creates a navigation link element wrapped in a list item `li`
 * @param param0
 * @returns
 */
export const NavItem = ({
  route,
  styles,
  children,
  ...props
}: NavItemProps) => {
  return (
    <>
      <Tag as="li" styles={styles} {...props}>
        <Tag as="a" href={route} styles={{ textTransform: "capitalize" }}>
          <>{children}</>
        </Tag>
      </Tag>
    </>
  );
};

export type NavProps = {
  children?: React.ReactNode;
  styles?: {};
};

/**
 * Nav component creates a navigation element
 * @param param0
 * @returns
 */
export const Nav = ({ children, styles, ...props }: NavProps) => {
  return (
    <>
      <Tag as="nav" style={styles} {...props}>
        <>{children}</>
      </Tag>
    </>
  );
};

/**
 * Exports
 */
export default Nav;
Nav.displayName = "Nav";

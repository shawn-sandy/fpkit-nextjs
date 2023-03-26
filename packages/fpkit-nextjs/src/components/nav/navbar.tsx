import React from "react";
import { Tag } from "@fpkit/react";
import Nav, { NavItem } from "./nav";

export type NavbarProps = {
  url: string;
  name: string;
};

export type NavListTypes = {
  navList: NavbarProps[];
};

export const Navbar = ({ navList }: NavListTypes) => {
  return (
    <Nav>
      <Tag as="ul">
        {navList.map((navItem) => {
          return (
            <NavItem route={navItem.url} key={React.useId()}>
              {navItem.name}
            </NavItem>
          );
        })}
      </Tag>
    </Nav>
  );
};

export default Navbar;
Navbar.displayName = "Navbar";

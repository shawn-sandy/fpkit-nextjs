import React from "react";
import { Tag, Text, Title } from "@fpkit/react";
import Nav, { NavItem } from "./nav";

export type NavbarProps = {
  url: string;
  name: string;
};

export type NavListTypes = {
  navList: NavbarProps[];
  brand?: {
    url?: string;
    logo?: React.ReactNode;
  };
};

export const Navbar = ({ navList, brand }: NavListTypes) => {
  return (
    <Nav>
      <Tag as="div">
        {!!brand && (
          <Title elm="h1" styles={{ "--fs": "1.5rem" }}>
            <Tag as="a" href={brand.url}>
              {brand.logo}
            </Tag>
          </Title>
        )}
      </Tag>
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

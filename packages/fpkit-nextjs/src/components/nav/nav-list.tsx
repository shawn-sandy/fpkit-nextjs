import React from "react";
import { NavItem } from "./nav";

import { FrontMatter } from "nextra";
import { Tag } from "@fpkit/react";

export interface Page {
  kind: string;
  name: string;
  route: string;
  frontMatter: FrontMatter;
}

export interface NavProps {
  pageList: Page[];
}

export const NavList = ({ pageList }: NavProps) => {
  return (
    <Tag as="ul">
      {pageList.map((page, index) => (
        <NavItem route={page.route} key={index}>
          {page.frontMatter.title}
        </NavItem>
      ))}
    </Tag>
  );
};

export default NavList;

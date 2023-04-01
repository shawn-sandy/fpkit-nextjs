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

export interface NavListProps {
  pageList: Page[];
}

export const NavList = ({ pageList }: NavListProps) => {
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

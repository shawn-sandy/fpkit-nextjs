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
  // throw an error if the pageList is empty or undefined

  return (
    <Tag as="ul">
      {pageList.map((page, index) => (
        <NavItem route={page.route} key={React.useId()}>
          {page.frontMatter.title}
        </NavItem>
      ))}
    </Tag>
  );
};

export default NavList;

import React from "react";
import { NavItem } from "./nav";

import { FrontMatter, PageMapItem, MdxFile } from "nextra";
import { Tag } from "@fpkit/react";

export interface Page {
  kind: string;
  name: string;
  route: string;
  frontMatter: FrontMatter;
}

export interface NavListProps {
  pageList: MdxFile[];
}

export const NavList = ({ pageList }: NavListProps) => {
  // throw an error if the pageList is empty or undefined
  if (!pageList || pageList.length === 0) {
    return (
      <Tag as="ul">
        <li></li>
      </Tag>
    );
  }

  return (
    <Tag as="ul">
      {pageList.map((page) => (
        <NavItem route={page.route} key={React.useId()}>
          {page.frontMatter.title}
        </NavItem>
      ))}
    </Tag>
  );
};

export default NavList;

import React from "react";
import { NavItem } from "./nav";

import { FrontMatter, PageMapItem, MdxFile } from "nextra";
import { Tag } from "@fpkit/react";

export interface NavListProps {
  pageList: MdxFile[];
}

export const NavList = ({ pageList }: NavListProps) => {
  // throw an error if the pageList is empty or undefined
  if (!pageList || pageList.length <= 0) {
    return (
      <Tag as="ul">
        <li>Help?</li>
      </Tag>
    );
  }

  const sorted: MdxFile[] = [...pageList].sort((a, b) =>
    a.frontMatter.navKey > b.frontMatter.navKey ? 1 : -1
  );

  return (
    <Tag as="ul">
      {sorted.map((page) => (
        <NavItem route={page.route} key={React.useId()}>
          {page.frontMatter?.navTitle ?? page.frontMatter.title}
        </NavItem>
      ))}
    </Tag>
  );
};

export default NavList;

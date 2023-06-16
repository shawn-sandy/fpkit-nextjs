import { MdxFile, FrontMatter } from "nextra";
import { Tag, Link } from "@fpkit/react";
import React from "react";

export type NavListTypes = {
  pages?: MdxFile[];
} & FrontMatter;

export const NavList = ({ pages, ...props }: NavListTypes) => {
  if (!pages) return null;
  return (
    <Tag as="ul" key={React.useId()} {...props}>
      {pages?.map((item) => {
        const { route } = item;
        return (
          <Tag as="li" key={React.useId()}>
            <Link href={route}>{item.frontMatter?.title}</Link>
          </Tag>
        );
      })}
    </Tag>
  );
};

export default NavList;
NavList.displayName = "NavList";

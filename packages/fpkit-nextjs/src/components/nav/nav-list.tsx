import { PageOpts, MdxFile, FrontMatter } from "nextra";
import { Tag } from "@fpkit/react";
import Link from "next/link";
import React from "react";

export type NavListTypes = {
  postList?: MdxFile[];
} & FrontMatter;

export const NavList = ({ postList, ...props }: NavListTypes) => {
  if (!postList) return null;
  return (
    <Tag as="ul" key={React.useId()} {...props}>
      {postList?.map((item) => {
        const { route } = item;
        return (
          <Tag as="li">
            <Link href={route}>{item.frontMatter?.title}</Link>
          </Tag>
        );
      })}
    </Tag>
  );
};

export default NavList;
NavList.displayName = "NavList";

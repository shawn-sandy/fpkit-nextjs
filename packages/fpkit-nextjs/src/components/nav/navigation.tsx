import React from "react";
import { Tag, Title } from "@fpkit/react";
import Nav, { NavItem } from "./nav";

import { MdxFile, Folder, PageMapItem } from "nextra";

type Kind = "Meta" | "MdxPage" | "Folder";

interface Meta {
  index: string;
  another: string;
  advanced: string;
  about: {
    title: string;
    type: string;
  };
  contact: {
    title: string;
    type: string;
    href: string;
    newWindow: boolean;
  };
  kind: "Meta";
}

type Data = (Meta | MdxFile | Folder | PageMapItem) & {
  kind: Kind;
};

function getFolders(data: Data[]): Folder[] {
  const folders: Folder[] = [];

  data.forEach((obj) => {
    if (obj.kind === "Folder") {
      folders.push(obj);
    }
  });

  return folders;
}

export interface Brand {
  brand?: {
    url?: string;
    logo?: React.ReactNode;
  };
}

interface NavbarProps extends Brand {
  styles?: {};
  data: Data[];
}

export const Navigation: React.FC<NavbarProps> = ({ data, brand, styles }) => {
  const folders = getFolders(data);

  return (
    <Nav styles={styles}>
      {!!brand && (
        <Tag as="div">
          <Title elm="h1" styles={{ "--fs": "1.2rem" }}>
            <Tag
              as="a"
              href={brand.url}
              styles={{ textTransform: "capitalize" }}
            >
              <>{brand.logo}</>
            </Tag>
          </Title>
        </Tag>
      )}

      <Tag as="ul">
        {folders.map((folder) => (
          <NavItem route={folder.route} key={folder.name}>
            <>{folder.name}</>
          </NavItem>
        ))}
      </Tag>
    </Nav>
  );
};

export default Navigation;

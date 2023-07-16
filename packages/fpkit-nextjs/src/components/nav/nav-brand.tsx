import React from "react";

import { Tag, Title, Link } from "@fpkit/react";

export interface BrandTypes {
  url: string;
  logo: React.ReactNode;
}

export const NavBrand = ({ url, logo }: BrandTypes) => {
  return (
    <Tag as="div">
      <Title elm="h1" styles={{ "--fs": "1.2rem" }}>
        <Link href={url} styles={{ textTransform: "capitalize" }}>
          <>{logo}</>
        </Link>
      </Title>
    </Tag>
  );
};

export default NavBrand;

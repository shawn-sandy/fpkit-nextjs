import { Navbar } from "@fpkit/nextjs";
import type { MdxFile } from "nextra";
import React from "react";

type NavProps = {
  brand: {
    url?: string;
    logo?: React.ReactNode;
  };
  navList: MdxFile[];
};

export default function Nav({ brand, navList }: NavProps): JSX.Element {
  return <Navbar brand={brand} navList={navList} />;
}

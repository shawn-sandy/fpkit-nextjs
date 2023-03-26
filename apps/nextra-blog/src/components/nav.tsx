import { Navbar } from "@fpkit/nextjs";
import React from "react";

export default function Nav({ brand, navList }) {
  return <Navbar brand={brand} navList={navList} />;
}

import { Navbar } from "@fpkit/nextjs";
import React from "react";

export default function Nav({ brand }) {
  const navList = [
    {
      url: "/home",
      name: "Home",
    },
    {
      url: "/about",
      name: "About",
    },
    {
      url: "/contact",
      name: "Contact",
    },
  ];
  return <Navbar brand={brand} navList={navList} />;
}

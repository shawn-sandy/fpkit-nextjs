import React from "react";
import { PG } from "@fpkit/nextjs";
import { Nav } from "@fpkit/nextjs";

export type NavbarProps = {
  children?: React.ReactNode;
  styles?: {};
};

export const Navbar = ({ styles, children }: NavbarProps) => {
  return (
    <PG.Nav styles={styles}>
      <div>
        <a href="/">Home</a>
      </div>
      <ul>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <>{children}</>
      </ul>
    </PG.Nav>
  );
};

export default Navbar;
Navbar.displayName = "Navbar";

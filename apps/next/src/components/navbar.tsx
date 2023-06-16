import React from "react";
import { Nav } from "@fpkit/nextra";

export type NavbarProps = {
  children?: React.ReactNode;
  styles?: {};
};

export const Navbar = ({ styles, children }: NavbarProps) => {
  return (
    <Nav
      styles={{
        backgroundColor: "#fff",
        "--nav-mx": 0,
        paddingInline: "1rem",
        ...styles,
      }}
    >
      <>{children}</>
    </Nav>
  );
};

export default Navbar;
Navbar.displayName = "Navbar";

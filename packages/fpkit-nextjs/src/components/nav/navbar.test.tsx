import React from "react";

import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import { expect, describe, test } from "vitest";

import Navbar from "./navbar";

describe("Nav renders correctly", () => {
  test("renders without crashing", async () => {
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
    render(<Navbar navList={navList} />);
    const nav = screen.getByRole("navigation");
    expect(nav).toBeDefined();
    const link = screen.getAllByRole("link");
    expect(link).toHaveLength(navList.length);
    expect(await axe(nav)).toHaveNoViolations();
  });
});

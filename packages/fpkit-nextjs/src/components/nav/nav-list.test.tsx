import React from "react";

import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";

import { NavList } from "./nav-list";
import { Nav } from "./nav";

import { navListItems } from "../data/nav-list";

describe("Nav renders correctly", () => {
  test("renders without crashing", async () => {
    render(
      <Nav>
        <NavList pages={navListItems} />
      </Nav>
    );
    const nav = screen.getByRole("navigation");
    const list = screen.getByRole("list");
    const links = screen.getAllByRole("link");

    expect(nav).toBeDefined();
    expect(list).toBeDefined();
    expect(links).toHaveLength(navListItems.length);
    // @ts-ignore
    expect(await axe(nav)).toHaveNoViolations();
    expect(nav).toMatchSnapshot();
  });
});

import React from "react";

import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";

// 👉 import ComponentName from "./component-name";
import { NavList } from "./nav-list";
import { Nav } from "./nav";

import { navListItems } from "../data/nav-list";

describe("Nav renders correctly", () => {
  test("renders without crashing", async () => {
    // 👉 render(<ComponentName>Link</ComponentName>);
    render(
      <Nav>
        <NavList pageList={navListItems} />
      </Nav>
    );
    const nav = screen.getByRole("navigation");
    const list = screen.getByRole("list");
    const links = screen.getAllByRole("link");

    expect(nav).toBeDefined();
    expect(list).toBeDefined();
    expect(links).toHaveLength(navListItems.length);
    expect(await axe(nav)).toHaveNoViolations();
    expect(nav).toMatchSnapshot();
  });
});

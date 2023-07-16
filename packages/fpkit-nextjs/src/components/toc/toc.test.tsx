import React from "react";

import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";

import { headings } from "./toc.test.data";

// 👉 import ComponentName from "./component-name";
import Toc from "./toc";
describe("App renders correctly", () => {
  it("renders without crashing", async () => {
    render(<Toc items={headings} />);
    const toc = screen.getByRole("list");
    expect(toc).toBeDefined();
    // @ts-ignore
    expect(await axe(toc)).toHaveNoViolations();
    expect(toc).toMatchSnapshot();
  });

  it("renders the correct number of items", () => {
    render(<Toc items={headings} />);
    const toc = screen.getByRole("list");
    const links = screen.getAllByRole("link");

    expect(toc.children.length).toBe(headings.length);
    expect(links.length).toBe(headings.length);
  });
});

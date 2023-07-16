import React from "react";

import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";

import Nav from "./nav";
describe("App renders correctly", () => {
  test("renders without crashing", async () => {
    render(<Nav>Link</Nav>);
    const nav = screen.getByRole("navigation");
    expect(nav).toBeDefined();
    // @ts-ignore
    expect(await axe(nav)).toHaveNoViolations();
    expect(nav).toMatchSnapshot();
  });
});

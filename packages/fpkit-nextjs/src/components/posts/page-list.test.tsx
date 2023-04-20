import React from "react";

import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import { pages } from "../data/pages";

// 👉 import ComponentName from "./component-name";

import PageList from "./page-list";
describe("App renders correctly", () => {
  test("renders without crashing", async () => {
    // 👉 render(<ComponentName>Link</ComponentName>);
    render(<PageList data={pages} />);
    // render(<Nav>Link</Nav>);
    // const nav = screen.getByRole("navigation");
    // expect(nav).toBeDefined();
    // expect(await axe(nav)).toHaveNoViolations();
    screen.debug();
    // expect(nav).toMatchSnapshot();
  });
});

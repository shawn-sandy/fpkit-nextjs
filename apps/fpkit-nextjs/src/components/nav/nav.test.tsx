import React from "react";

import { describe, expect, test, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Nav from "./nav";
describe("App renders correctly", () => {
  test("renders without crashing", () => {
    render(<Nav />);
    expect(screen).toMatchSnapshot();
  });
});

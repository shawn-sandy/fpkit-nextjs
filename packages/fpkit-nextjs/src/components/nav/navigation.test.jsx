import React from "react";

import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import { expect, describe, test } from "vitest";

import { dataSet, branding } from "../mocks/navigation.mocks";

// 👉 import your component here
import Navigation from "./navigation";

describe("Navigation", () => {
  test("renders the navigation", () => {
    render(<Navigation data={dataSet} />);
    const navigation = screen.getByRole("navigation");
    // const brand = screen.getByRole("heading");

    expect(navigation).toBeDefined();
    expect(navigation).toMatchSnapshot();
  });

  test("is accessible", async () => {
    const { container } = render(<Navigation data={dataSet} />);

    expect(await axe(container)).toHaveNoViolations();
  });

  test("renders the branding", async () => {
    render(<Navigation data={dataSet} brand={branding} />);
    const navigation = screen.getByRole("navigation");
    const brand = screen.getByRole("heading");

    expect(brand).toBeDefined();
    expect(brand).toMatchSnapshot();
    expect(await axe(navigation)).toHaveNoViolations();
  });
});

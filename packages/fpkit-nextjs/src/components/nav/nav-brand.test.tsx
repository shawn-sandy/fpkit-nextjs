import React from "react";

import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";

// 👉 import ComponentName from "./component-name";
import NavBrand from "./nav-brand";

const brand = {
  logo: "FPKit NextJS",
  url: "/",
};

import Nav from "./nav";
describe("<NavBrand/>", () => {
  test("renders without crashing", async () => {
    render(<NavBrand url={brand.url} logo={brand.logo} />);
    const brandHeading = screen.getByRole("heading");
    expect(brandHeading).toBeDefined();
    // @ts-ignore
    expect(await axe(brandHeading)).toHaveNoViolations();
    // expect(brandHeading).
    screen.logTestingPlaygroundURL();
    expect(brandHeading).toMatchSnapshot();
  });
});

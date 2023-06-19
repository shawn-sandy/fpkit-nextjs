import React from "react";
import { test, expect } from "vitest";
import { render } from "react-dom";
import { PG } from "./pg";

test("PG component renders children", () => {
  const container = document.createElement("div");
  const children = <p>Test children</p>;
  render(<PG>{children}</PG>, container);
  expect(container.innerHTML).toContain("Test children");
});

test("HeaderSection component renders title and children", () => {
  const container = document.createElement("div");
  const title = "Test title";
  const children = <p>Test children</p>;
  render(<PG.Header title={title}>{children}</PG.Header>, container);
  expect(container.innerHTML).toContain(title);
  expect(container.innerHTML).toContain("Test children");
});

test("MainSection component renders children", () => {
  const container = document.createElement("div");
  const children = <p>Test children</p>;
  render(<PG.Main>{children}</PG.Main>, container);
  expect(container.innerHTML).toContain("Test children");
});

test("FooterSection component renders children", () => {
  const container = document.createElement("div");
  const children = <p>Test children</p>;
  render(<PG.Footer>{children}</PG.Footer>, container);
  expect(container.innerHTML).toContain("Test children");
});

test("NavSection component renders children", () => {
  const container = document.createElement("div");
  const children = <p>Home</p>;
  render(<PG.Nav>{children}</PG.Nav>, container);
  expect(container.innerHTML).toContain("Home");
});

import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import PageHeader from "./page-header";

test("renders the title", () => {
  const { getByText } = render(<PageHeader title="Test Title" />);
  expect(getByText("Test Title")).toBeDefined();
});

test("renders the children", () => {
  const { getByText } = render(
    <PageHeader title="Site Header">
      <p>Test Child</p>
    </PageHeader>
  );
  expect(getByText("Test Child")).toBeDefined();
});

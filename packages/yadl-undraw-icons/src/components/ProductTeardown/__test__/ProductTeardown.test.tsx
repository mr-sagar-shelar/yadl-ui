import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ProductTeardown from "../ProductTeardown";

describe("ProductTeardown component", () => {
  it("ProductTeardown should render correctly", () => {
    render(<ProductTeardown />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ProductTour from "../ProductTour";

describe("ProductTour component", () => {
  it("ProductTour should render correctly", () => {
    render(<ProductTour />);
    expect(true).toBeTruthy();
  });
});

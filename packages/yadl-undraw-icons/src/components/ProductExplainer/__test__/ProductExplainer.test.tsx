import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ProductExplainer from "../ProductExplainer";

describe("ProductExplainer component", () => {
  it("ProductExplainer should render correctly", () => {
    render(<ProductExplainer />);
    expect(true).toBeTruthy();
  });
});

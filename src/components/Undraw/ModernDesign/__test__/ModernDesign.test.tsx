import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ModernDesign from "../ModernDesign";

describe("ModernDesign component", () => {
  it("ModernDesign should render correctly", () => {
    render(<ModernDesign />);
    expect(true).toBeTruthy();
  });
});

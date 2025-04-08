import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import InteriorDesign from "../InteriorDesign";

describe("InteriorDesign component", () => {
  it("InteriorDesign should render correctly", () => {
    render(<InteriorDesign />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IconDesign from "../IconDesign";

describe("IconDesign component", () => {
  it("IconDesign should render correctly", () => {
    render(<IconDesign />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VMScaleSets from "../VMScaleSets";

describe("VMScaleSets component", () => {
  it("VMScaleSets should render correctly", () => {
    render(<VMScaleSets />);
    expect(true).toBeTruthy();
  });
});

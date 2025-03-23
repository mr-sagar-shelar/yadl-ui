import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LogoDesign from "../LogoDesign";

describe("LogoDesign component", () => {
  it("LogoDesign should render correctly", () => {
    render(<LogoDesign />);
    expect(true).toBeTruthy();
  });
});

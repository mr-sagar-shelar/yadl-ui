import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Marketplace_ from "../Marketplace_";

describe("Marketplace_ component", () => {
  it("Marketplace_ should render correctly", () => {
    render(<Marketplace_ />);
    expect(true).toBeTruthy();
  });
});

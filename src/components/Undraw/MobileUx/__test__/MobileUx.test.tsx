import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MobileUx from "../MobileUx";

describe("MobileUx component", () => {
  it("MobileUx should render correctly", () => {
    render(<MobileUx />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PackageArrived from "../PackageArrived";

describe("PackageArrived component", () => {
  it("PackageArrived should render correctly", () => {
    render(<PackageArrived />);
    expect(true).toBeTruthy();
  });
});

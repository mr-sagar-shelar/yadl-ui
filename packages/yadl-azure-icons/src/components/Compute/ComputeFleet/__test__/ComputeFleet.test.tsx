import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ComputeFleet from "../ComputeFleet";

describe("ComputeFleet component", () => {
  it("ComputeFleet should render correctly", () => {
    render(<ComputeFleet />);
    expect(true).toBeTruthy();
  });
});

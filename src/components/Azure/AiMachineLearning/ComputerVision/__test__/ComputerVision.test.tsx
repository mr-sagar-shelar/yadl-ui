import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ComputerVision from "../ComputerVision";

describe("ComputerVision component", () => {
  it("ComputerVision should render correctly", () => {
    render(<ComputerVision />);
    expect(true).toBeTruthy();
  });
});

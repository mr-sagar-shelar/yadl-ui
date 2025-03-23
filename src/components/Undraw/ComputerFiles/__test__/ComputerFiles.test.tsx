import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ComputerFiles from "../ComputerFiles";

describe("ComputerFiles component", () => {
  it("ComputerFiles should render correctly", () => {
    render(<ComputerFiles />);
    expect(true).toBeTruthy();
  });
});
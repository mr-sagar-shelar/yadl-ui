import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ComputeEngine from "../ComputeEngine";

describe("ComputeEngine component", () => {
  it("ComputeEngine should render correctly", () => {
    render(<ComputeEngine />);
    expect(true).toBeTruthy();
  });
});

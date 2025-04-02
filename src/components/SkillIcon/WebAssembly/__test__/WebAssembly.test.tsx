import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WebAssembly from "../WebAssembly";

describe("WebAssembly component", () => {
  it("WebAssembly should render correctly", () => {
    render(<WebAssembly />);
    expect(true).toBeTruthy();
  });
});

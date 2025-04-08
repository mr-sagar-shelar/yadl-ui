import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PyTorch from "../PyTorch";

describe("PyTorch component", () => {
  it("PyTorch should render correctly", () => {
    render(<PyTorch />);
    expect(true).toBeTruthy();
  });
});

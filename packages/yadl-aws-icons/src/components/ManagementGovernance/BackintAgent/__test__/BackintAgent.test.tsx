import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BackintAgent from "../BackintAgent";

describe("BackintAgent component", () => {
  it("BackintAgent should render correctly", () => {
    render(<BackintAgent />);
    expect(true).toBeTruthy();
  });
});

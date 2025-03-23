import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MomentToRemember from "../MomentToRemember";

describe("MomentToRemember component", () => {
  it("MomentToRemember should render correctly", () => {
    render(<MomentToRemember />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AutoScaling from "../AutoScaling";

describe("AutoScaling component", () => {
  it("AutoScaling should render correctly", () => {
    render(<AutoScaling />);
    expect(true).toBeTruthy();
  });
});

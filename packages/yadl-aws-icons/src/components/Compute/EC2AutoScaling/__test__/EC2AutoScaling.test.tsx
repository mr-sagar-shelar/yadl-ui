import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EC2AutoScaling from "../EC2AutoScaling";

describe("EC2AutoScaling component", () => {
  it("EC2AutoScaling should render correctly", () => {
    render(<EC2AutoScaling />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ApplicationAutoScaling from "../ApplicationAutoScaling";

describe("ApplicationAutoScaling component", () => {
  it("ApplicationAutoScaling should render correctly", () => {
    render(<ApplicationAutoScaling />);
    expect(true).toBeTruthy();
  });
});

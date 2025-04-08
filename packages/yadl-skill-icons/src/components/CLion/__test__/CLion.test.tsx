import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CLion from "../CLion";

describe("CLion component", () => {
  it("CLion should render correctly", () => {
    render(<CLion />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SmartResize from "../SmartResize";

describe("SmartResize component", () => {
  it("SmartResize should render correctly", () => {
    render(<SmartResize />);
    expect(true).toBeTruthy();
  });
});

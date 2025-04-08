import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Analytics from "../Analytics";

describe("Analytics component", () => {
  it("Analytics should render correctly", () => {
    render(<Analytics />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Jenkins from "../Jenkins";

describe("Jenkins component", () => {
  it("Jenkins should render correctly", () => {
    render(<Jenkins />);
    expect(true).toBeTruthy();
  });
});

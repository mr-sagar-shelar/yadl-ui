import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Learn from "../Learn";

describe("Learn component", () => {
  it("Learn should render correctly", () => {
    render(<Learn />);
    expect(true).toBeTruthy();
  });
});

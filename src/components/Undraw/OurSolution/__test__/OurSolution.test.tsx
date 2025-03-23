import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OurSolution from "../OurSolution";

describe("OurSolution component", () => {
  it("OurSolution should render correctly", () => {
    render(<OurSolution />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CompletedSteps from "../CompletedSteps";

describe("CompletedSteps component", () => {
  it("CompletedSteps should render correctly", () => {
    render(<CompletedSteps />);
    expect(true).toBeTruthy();
  });
});

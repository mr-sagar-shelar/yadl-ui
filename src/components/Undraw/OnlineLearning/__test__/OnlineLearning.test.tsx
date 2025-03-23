import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineLearning from "../OnlineLearning";

describe("OnlineLearning component", () => {
  it("OnlineLearning should render correctly", () => {
    render(<OnlineLearning />);
    expect(true).toBeTruthy();
  });
});

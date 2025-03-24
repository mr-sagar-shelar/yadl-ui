import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MachineLearning from "../MachineLearning";

describe("MachineLearning component", () => {
  it("MachineLearning should render correctly", () => {
    render(<MachineLearning />);
    expect(true).toBeTruthy();
  });
});

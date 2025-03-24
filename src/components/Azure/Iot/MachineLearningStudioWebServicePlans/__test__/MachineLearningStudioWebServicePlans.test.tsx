import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MachineLearningStudioWebServicePlans from "../MachineLearningStudioWebServicePlans";

describe("MachineLearningStudioWebServicePlans component", () => {
  it("MachineLearningStudioWebServicePlans should render correctly", () => {
    render(<MachineLearningStudioWebServicePlans />);
    expect(true).toBeTruthy();
  });
});

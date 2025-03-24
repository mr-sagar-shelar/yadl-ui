import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MachineLearningStudioClassicWebServices from "../MachineLearningStudioClassicWebServices";

describe("MachineLearningStudioClassicWebServices component", () => {
  it("MachineLearningStudioClassicWebServices should render correctly", () => {
    render(<MachineLearningStudioClassicWebServices />);
    expect(true).toBeTruthy();
  });
});

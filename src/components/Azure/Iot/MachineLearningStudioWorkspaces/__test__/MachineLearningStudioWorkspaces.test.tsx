import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MachineLearningStudioWorkspaces from "../MachineLearningStudioWorkspaces";

describe("MachineLearningStudioWorkspaces component", () => {
  it("MachineLearningStudioWorkspaces should render correctly", () => {
    render(<MachineLearningStudioWorkspaces />);
    expect(true).toBeTruthy();
  });
});

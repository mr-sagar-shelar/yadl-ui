import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureExperimentationStudio from "../AzureExperimentationStudio";

describe("AzureExperimentationStudio component", () => {
  it("AzureExperimentationStudio should render correctly", () => {
    render(<AzureExperimentationStudio />);
    expect(true).toBeTruthy();
  });
});

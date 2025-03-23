import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CreativeExperimentCreativeExperiment from "../CreativeExperimentCreativeExperiment";

describe("CreativeExperimentCreativeExperiment component", () => {
  it("CreativeExperimentCreativeExperiment should render correctly", () => {
    render(<CreativeExperimentCreativeExperiment />);
    expect(true).toBeTruthy();
  });
});

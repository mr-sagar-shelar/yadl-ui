import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SageMakerGroundTruth from "../SageMakerGroundTruth";

describe("SageMakerGroundTruth component", () => {
  it("SageMakerGroundTruth should render correctly", () => {
    render(<SageMakerGroundTruth />);
    expect(true).toBeTruthy();
  });
});

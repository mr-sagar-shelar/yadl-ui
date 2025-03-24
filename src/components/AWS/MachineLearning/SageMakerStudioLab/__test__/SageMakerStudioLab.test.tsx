import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SageMakerStudioLab from "../SageMakerStudioLab";

describe("SageMakerStudioLab component", () => {
  it("SageMakerStudioLab should render correctly", () => {
    render(<SageMakerStudioLab />);
    expect(true).toBeTruthy();
  });
});

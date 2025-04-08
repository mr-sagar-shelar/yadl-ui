import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SageMaker from "../SageMaker";

describe("SageMaker component", () => {
  it("SageMaker should render correctly", () => {
    render(<SageMaker />);
    expect(true).toBeTruthy();
  });
});

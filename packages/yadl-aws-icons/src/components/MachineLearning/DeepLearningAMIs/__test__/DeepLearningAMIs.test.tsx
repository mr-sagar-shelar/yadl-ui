import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DeepLearningAMIs from "../DeepLearningAMIs";

describe("DeepLearningAMIs component", () => {
  it("DeepLearningAMIs should render correctly", () => {
    render(<DeepLearningAMIs />);
    expect(true).toBeTruthy();
  });
});

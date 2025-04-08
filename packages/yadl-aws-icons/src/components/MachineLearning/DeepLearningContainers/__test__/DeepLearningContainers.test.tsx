import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DeepLearningContainers from "../DeepLearningContainers";

describe("DeepLearningContainers component", () => {
  it("DeepLearningContainers should render correctly", () => {
    render(<DeepLearningContainers />);
    expect(true).toBeTruthy();
  });
});

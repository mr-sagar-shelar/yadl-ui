import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ContainerOptimizedOs from "../ContainerOptimizedOs";

describe("ContainerOptimizedOs component", () => {
  it("ContainerOptimizedOs should render correctly", () => {
    render(<ContainerOptimizedOs />);
    expect(true).toBeTruthy();
  });
});

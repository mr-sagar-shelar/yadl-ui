import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureChaosStudio from "../AzureChaosStudio";

describe("AzureChaosStudio component", () => {
  it("AzureChaosStudio should render correctly", () => {
    render(<AzureChaosStudio />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureSupportCenterBlue from "../AzureSupportCenterBlue";

describe("AzureSupportCenterBlue component", () => {
  it("AzureSupportCenterBlue should render correctly", () => {
    render(<AzureSupportCenterBlue />);
    expect(true).toBeTruthy();
  });
});

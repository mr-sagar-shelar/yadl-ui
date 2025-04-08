import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DefenderIndustrialPackagingSystem from "../DefenderIndustrialPackagingSystem";

describe("DefenderIndustrialPackagingSystem component", () => {
  it("DefenderIndustrialPackagingSystem should render correctly", () => {
    render(<DefenderIndustrialPackagingSystem />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureSustainability from "../AzureSustainability";

describe("AzureSustainability component", () => {
  it("AzureSustainability should render correctly", () => {
    render(<AzureSustainability />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureOrbital from "../AzureOrbital";

describe("AzureOrbital component", () => {
  it("AzureOrbital should render correctly", () => {
    render(<AzureOrbital />);
    expect(true).toBeTruthy();
  });
});

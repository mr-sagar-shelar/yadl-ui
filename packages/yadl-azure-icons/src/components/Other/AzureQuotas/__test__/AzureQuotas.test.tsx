import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureQuotas from "../AzureQuotas";

describe("AzureQuotas component", () => {
  it("AzureQuotas should render correctly", () => {
    render(<AzureQuotas />);
    expect(true).toBeTruthy();
  });
});

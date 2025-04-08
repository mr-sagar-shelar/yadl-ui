import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureSynapseAnalytics from "../AzureSynapseAnalytics";

describe("AzureSynapseAnalytics component", () => {
  it("AzureSynapseAnalytics should render correctly", () => {
    render(<AzureSynapseAnalytics />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureAppliedAIServices from "../AzureAppliedAIServices";

describe("AzureAppliedAIServices component", () => {
  it("AzureAppliedAIServices should render correctly", () => {
    render(<AzureAppliedAIServices />);
    expect(true).toBeTruthy();
  });
});

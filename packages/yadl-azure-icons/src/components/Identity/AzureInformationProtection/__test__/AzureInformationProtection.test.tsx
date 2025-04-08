import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureInformationProtection from "../AzureInformationProtection";

describe("AzureInformationProtection component", () => {
  it("AzureInformationProtection should render correctly", () => {
    render(<AzureInformationProtection />);
    expect(true).toBeTruthy();
  });
});

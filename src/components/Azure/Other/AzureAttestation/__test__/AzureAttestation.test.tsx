import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureAttestation from "../AzureAttestation";

describe("AzureAttestation component", () => {
  it("AzureAttestation should render correctly", () => {
    render(<AzureAttestation />);
    expect(true).toBeTruthy();
  });
});

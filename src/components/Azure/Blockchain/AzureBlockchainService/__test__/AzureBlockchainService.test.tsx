import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureBlockchainService from "../AzureBlockchainService";

describe("AzureBlockchainService component", () => {
  it("AzureBlockchainService should render correctly", () => {
    render(<AzureBlockchainService />);
    expect(true).toBeTruthy();
  });
});

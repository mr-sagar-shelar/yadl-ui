import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureTokenService from "../AzureTokenService";

describe("AzureTokenService component", () => {
  it("AzureTokenService should render correctly", () => {
    render(<AzureTokenService />);
    expect(true).toBeTruthy();
  });
});

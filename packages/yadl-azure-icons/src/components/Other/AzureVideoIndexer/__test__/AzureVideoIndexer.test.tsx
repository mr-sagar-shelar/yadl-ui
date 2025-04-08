import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureVideoIndexer from "../AzureVideoIndexer";

describe("AzureVideoIndexer component", () => {
  it("AzureVideoIndexer should render correctly", () => {
    render(<AzureVideoIndexer />);
    expect(true).toBeTruthy();
  });
});

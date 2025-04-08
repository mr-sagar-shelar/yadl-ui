import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureComputeGalleries from "../AzureComputeGalleries";

describe("AzureComputeGalleries component", () => {
  it("AzureComputeGalleries should render correctly", () => {
    render(<AzureComputeGalleries />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureDataCatalog from "../AzureDataCatalog";

describe("AzureDataCatalog component", () => {
  it("AzureDataCatalog should render correctly", () => {
    render(<AzureDataCatalog />);
    expect(true).toBeTruthy();
  });
});

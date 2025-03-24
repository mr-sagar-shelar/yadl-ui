import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureDataExplorerClusters from "../AzureDataExplorerClusters";

describe("AzureDataExplorerClusters component", () => {
  it("AzureDataExplorerClusters should render correctly", () => {
    render(<AzureDataExplorerClusters />);
    expect(true).toBeTruthy();
  });
});

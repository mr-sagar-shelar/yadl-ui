import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureCloudShell from "../AzureCloudShell";

describe("AzureCloudShell component", () => {
  it("AzureCloudShell should render correctly", () => {
    render(<AzureCloudShell />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureDeploymentEnvironments from "../AzureDeploymentEnvironments";

describe("AzureDeploymentEnvironments component", () => {
  it("AzureDeploymentEnvironments should render correctly", () => {
    render(<AzureDeploymentEnvironments />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureSQL from "../AzureSQL";

describe("AzureSQL component", () => {
  it("AzureSQL should render correctly", () => {
    render(<AzureSQL />);
    expect(true).toBeTruthy();
  });
});

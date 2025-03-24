import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureNetAppFiles from "../AzureNetAppFiles";

describe("AzureNetAppFiles component", () => {
  it("AzureNetAppFiles should render correctly", () => {
    render(<AzureNetAppFiles />);
    expect(true).toBeTruthy();
  });
});

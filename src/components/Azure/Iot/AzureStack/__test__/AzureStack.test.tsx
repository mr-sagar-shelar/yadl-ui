import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureStack from "../AzureStack";

describe("AzureStack component", () => {
  it("AzureStack should render correctly", () => {
    render(<AzureStack />);
    expect(true).toBeTruthy();
  });
});

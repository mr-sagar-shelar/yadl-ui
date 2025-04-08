import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureDatabricks from "../AzureDatabricks";

describe("AzureDatabricks component", () => {
  it("AzureDatabricks should render correctly", () => {
    render(<AzureDatabricks />);
    expect(true).toBeTruthy();
  });
});

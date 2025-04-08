import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureSentinel from "../AzureSentinel";

describe("AzureSentinel component", () => {
  it("AzureSentinel should render correctly", () => {
    render(<AzureSentinel />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureA from "../AzureA";

describe("AzureA component", () => {
  it("AzureA should render correctly", () => {
    render(<AzureA />);
    expect(true).toBeTruthy();
  });
});

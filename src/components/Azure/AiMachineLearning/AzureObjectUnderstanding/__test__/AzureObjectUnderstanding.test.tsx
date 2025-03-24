import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureObjectUnderstanding from "../AzureObjectUnderstanding";

describe("AzureObjectUnderstanding component", () => {
  it("AzureObjectUnderstanding should render correctly", () => {
    render(<AzureObjectUnderstanding />);
    expect(true).toBeTruthy();
  });
});

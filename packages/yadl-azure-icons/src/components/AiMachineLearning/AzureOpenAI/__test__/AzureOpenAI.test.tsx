import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureOpenAI from "../AzureOpenAI";

describe("AzureOpenAI component", () => {
  it("AzureOpenAI should render correctly", () => {
    render(<AzureOpenAI />);
    expect(true).toBeTruthy();
  });
});

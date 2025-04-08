import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureRedHatOpenShift from "../AzureRedHatOpenShift";

describe("AzureRedHatOpenShift component", () => {
  it("AzureRedHatOpenShift should render correctly", () => {
    render(<AzureRedHatOpenShift />);
    expect(true).toBeTruthy();
  });
});

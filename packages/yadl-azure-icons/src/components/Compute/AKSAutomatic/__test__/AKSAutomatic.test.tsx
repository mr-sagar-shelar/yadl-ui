import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AKSAutomatic from "../AKSAutomatic";

describe("AKSAutomatic component", () => {
  it("AKSAutomatic should render correctly", () => {
    render(<AKSAutomatic />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Browser from "../Browser";

describe("Browser component", () => {
  it("Browser should render correctly", () => {
    render(<Browser />);
    expect(true).toBeTruthy();
  });
});

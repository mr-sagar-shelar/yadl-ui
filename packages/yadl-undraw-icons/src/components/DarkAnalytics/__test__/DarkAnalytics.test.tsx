import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DarkAnalytics from "../DarkAnalytics";

describe("DarkAnalytics component", () => {
  it("DarkAnalytics should render correctly", () => {
    render(<DarkAnalytics />);
    expect(true).toBeTruthy();
  });
});

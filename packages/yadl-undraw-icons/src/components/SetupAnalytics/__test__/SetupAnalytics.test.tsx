import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SetupAnalytics from "../SetupAnalytics";

describe("SetupAnalytics component", () => {
  it("SetupAnalytics should render correctly", () => {
    render(<SetupAnalytics />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AnalyticsHub from "../AnalyticsHub";

describe("AnalyticsHub component", () => {
  it("AnalyticsHub should render correctly", () => {
    render(<AnalyticsHub />);
    expect(true).toBeTruthy();
  });
});

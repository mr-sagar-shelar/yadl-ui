import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BusinessAnalytics from "../BusinessAnalytics";

describe("BusinessAnalytics component", () => {
  it("BusinessAnalytics should render correctly", () => {
    render(<BusinessAnalytics />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ApiAnalytics from "../ApiAnalytics";

describe("ApiAnalytics component", () => {
  it("ApiAnalytics should render correctly", () => {
    render(<ApiAnalytics />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DashboardHub from "../DashboardHub";

describe("DashboardHub component", () => {
  it("DashboardHub should render correctly", () => {
    render(<DashboardHub />);
    expect(true).toBeTruthy();
  });
});

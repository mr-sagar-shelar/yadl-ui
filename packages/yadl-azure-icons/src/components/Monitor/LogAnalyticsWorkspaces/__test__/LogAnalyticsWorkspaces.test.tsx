import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LogAnalyticsWorkspaces from "../LogAnalyticsWorkspaces";

describe("LogAnalyticsWorkspaces component", () => {
  it("LogAnalyticsWorkspaces should render correctly", () => {
    render(<LogAnalyticsWorkspaces />);
    expect(true).toBeTruthy();
  });
});

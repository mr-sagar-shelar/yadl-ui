import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EndpointAnalytics from "../EndpointAnalytics";

describe("EndpointAnalytics component", () => {
  it("EndpointAnalytics should render correctly", () => {
    render(<EndpointAnalytics />);
    expect(true).toBeTruthy();
  });
});

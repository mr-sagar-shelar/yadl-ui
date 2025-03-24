import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ApplicationInsights from "../ApplicationInsights";

describe("ApplicationInsights component", () => {
  it("ApplicationInsights should render correctly", () => {
    render(<ApplicationInsights />);
    expect(true).toBeTruthy();
  });
});

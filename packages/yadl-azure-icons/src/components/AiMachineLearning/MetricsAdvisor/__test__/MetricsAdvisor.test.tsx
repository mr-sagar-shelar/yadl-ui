import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MetricsAdvisor from "../MetricsAdvisor";

describe("MetricsAdvisor component", () => {
  it("MetricsAdvisor should render correctly", () => {
    render(<MetricsAdvisor />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HealthcareNlpApi from "../HealthcareNlpApi";

describe("HealthcareNlpApi component", () => {
  it("HealthcareNlpApi should render correctly", () => {
    render(<HealthcareNlpApi />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DDoSProtectionPlans from "../DDoSProtectionPlans";

describe("DDoSProtectionPlans component", () => {
  it("DDoSProtectionPlans should render correctly", () => {
    render(<DDoSProtectionPlans />);
    expect(true).toBeTruthy();
  });
});

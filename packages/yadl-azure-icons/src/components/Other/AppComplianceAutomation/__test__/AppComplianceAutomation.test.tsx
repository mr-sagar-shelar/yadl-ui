import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AppComplianceAutomation from "../AppComplianceAutomation";

describe("AppComplianceAutomation component", () => {
  it("AppComplianceAutomation should render correctly", () => {
    render(<AppComplianceAutomation />);
    expect(true).toBeTruthy();
  });
});

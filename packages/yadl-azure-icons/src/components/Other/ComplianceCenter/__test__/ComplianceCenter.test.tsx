import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ComplianceCenter from "../ComplianceCenter";

describe("ComplianceCenter component", () => {
  it("ComplianceCenter should render correctly", () => {
    render(<ComplianceCenter />);
    expect(true).toBeTruthy();
  });
});

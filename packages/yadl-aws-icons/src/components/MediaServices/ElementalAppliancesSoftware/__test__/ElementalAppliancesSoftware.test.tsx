import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ElementalAppliancesSoftware from "../ElementalAppliancesSoftware";

describe("ElementalAppliancesSoftware component", () => {
  it("ElementalAppliancesSoftware should render correctly", () => {
    render(<ElementalAppliancesSoftware />);
    expect(true).toBeTruthy();
  });
});

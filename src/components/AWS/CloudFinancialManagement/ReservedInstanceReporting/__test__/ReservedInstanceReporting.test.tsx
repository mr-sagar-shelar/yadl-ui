import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ReservedInstanceReporting from "../ReservedInstanceReporting";

describe("ReservedInstanceReporting component", () => {
  it("ReservedInstanceReporting should render correctly", () => {
    render(<ReservedInstanceReporting />);
    expect(true).toBeTruthy();
  });
});

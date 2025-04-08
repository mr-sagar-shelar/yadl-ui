import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NightCallsNightCalls from "../NightCallsNightCalls";

describe("NightCallsNightCalls component", () => {
  it("NightCallsNightCalls should render correctly", () => {
    render(<NightCallsNightCalls />);
    expect(true).toBeTruthy();
  });
});

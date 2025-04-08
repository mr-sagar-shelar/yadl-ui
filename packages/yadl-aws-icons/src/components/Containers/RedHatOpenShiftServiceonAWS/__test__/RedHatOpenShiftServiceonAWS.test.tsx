import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RedHatOpenShiftServiceonAWS from "../RedHatOpenShiftServiceonAWS";

describe("RedHatOpenShiftServiceonAWS component", () => {
  it("RedHatOpenShiftServiceonAWS should render correctly", () => {
    render(<RedHatOpenShiftServiceonAWS />);
    expect(true).toBeTruthy();
  });
});

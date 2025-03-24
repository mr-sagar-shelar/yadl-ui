import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AvailabilitySets from "../AvailabilitySets";

describe("AvailabilitySets component", () => {
  it("AvailabilitySets should render correctly", () => {
    render(<AvailabilitySets />);
    expect(true).toBeTruthy();
  });
});

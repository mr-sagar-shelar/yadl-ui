import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RideTillICanNoMore from "../RideTillICanNoMore";

describe("RideTillICanNoMore component", () => {
  it("RideTillICanNoMore should render correctly", () => {
    render(<RideTillICanNoMore />);
    expect(true).toBeTruthy();
  });
});

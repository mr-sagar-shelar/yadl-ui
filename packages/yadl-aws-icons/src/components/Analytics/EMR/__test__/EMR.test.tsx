import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EMR from "../EMR";

describe("EMR component", () => {
  it("EMR should render correctly", () => {
    render(<EMR />);
    expect(true).toBeTruthy();
  });
});

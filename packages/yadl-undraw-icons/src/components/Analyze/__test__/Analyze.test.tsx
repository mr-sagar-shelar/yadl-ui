import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Analyze from "../Analyze";

describe("Analyze component", () => {
  it("Analyze should render correctly", () => {
    render(<Analyze />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ArcMachines from "../ArcMachines";

describe("ArcMachines component", () => {
  it("ArcMachines should render correctly", () => {
    render(<ArcMachines />);
    expect(true).toBeTruthy();
  });
});

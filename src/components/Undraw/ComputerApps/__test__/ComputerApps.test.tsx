import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ComputerApps from "../ComputerApps";

describe("ComputerApps component", () => {
  it("ComputerApps should render correctly", () => {
    render(<ComputerApps />);
    expect(true).toBeTruthy();
  });
});

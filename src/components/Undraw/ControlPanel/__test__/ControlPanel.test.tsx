import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ControlPanel from "../ControlPanel";

describe("ControlPanel component", () => {
  it("ControlPanel should render correctly", () => {
    render(<ControlPanel />);
    expect(true).toBeTruthy();
  });
});

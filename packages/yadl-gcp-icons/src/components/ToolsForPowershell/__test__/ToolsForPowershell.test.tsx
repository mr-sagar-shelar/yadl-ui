import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ToolsForPowershell from "../ToolsForPowershell";

describe("ToolsForPowershell component", () => {
  it("ToolsForPowershell should render correctly", () => {
    render(<ToolsForPowershell />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ToolsandSDKs from "../ToolsandSDKs";

describe("ToolsandSDKs component", () => {
  it("ToolsandSDKs should render correctly", () => {
    render(<ToolsandSDKs />);
    expect(true).toBeTruthy();
  });
});

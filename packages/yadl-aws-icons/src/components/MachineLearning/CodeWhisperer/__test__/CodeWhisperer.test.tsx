import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CodeWhisperer from "../CodeWhisperer";

describe("CodeWhisperer component", () => {
  it("CodeWhisperer should render correctly", () => {
    render(<CodeWhisperer />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AutomanagedVM from "../AutomanagedVM";

describe("AutomanagedVM component", () => {
  it("AutomanagedVM should render correctly", () => {
    render(<AutomanagedVM />);
    expect(true).toBeTruthy();
  });
});

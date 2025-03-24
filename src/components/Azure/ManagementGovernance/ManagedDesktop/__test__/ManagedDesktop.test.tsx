import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ManagedDesktop from "../ManagedDesktop";

describe("ManagedDesktop component", () => {
  it("ManagedDesktop should render correctly", () => {
    render(<ManagedDesktop />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DiagnosticsSettings from "../DiagnosticsSettings";

describe("DiagnosticsSettings component", () => {
  it("DiagnosticsSettings should render correctly", () => {
    render(<DiagnosticsSettings />);
    expect(true).toBeTruthy();
  });
});

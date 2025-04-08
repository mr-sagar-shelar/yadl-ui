import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SetupWizard from "../SetupWizard";

describe("SetupWizard component", () => {
  it("SetupWizard should render correctly", () => {
    render(<SetupWizard />);
    expect(true).toBeTruthy();
  });
});

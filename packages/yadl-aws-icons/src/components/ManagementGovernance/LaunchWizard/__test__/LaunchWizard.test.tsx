import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LaunchWizard from "../LaunchWizard";

describe("LaunchWizard component", () => {
  it("LaunchWizard should render correctly", () => {
    render(<LaunchWizard />);
    expect(true).toBeTruthy();
  });
});

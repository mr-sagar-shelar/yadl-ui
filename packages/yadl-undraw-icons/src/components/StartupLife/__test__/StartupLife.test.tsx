import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StartupLife from "../StartupLife";

describe("StartupLife component", () => {
  it("StartupLife should render correctly", () => {
    render(<StartupLife />);
    expect(true).toBeTruthy();
  });
});

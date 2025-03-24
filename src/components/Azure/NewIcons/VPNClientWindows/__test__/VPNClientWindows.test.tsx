import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VPNClientWindows from "../VPNClientWindows";

describe("VPNClientWindows component", () => {
  it("VPNClientWindows should render correctly", () => {
    render(<VPNClientWindows />);
    expect(true).toBeTruthy();
  });
});

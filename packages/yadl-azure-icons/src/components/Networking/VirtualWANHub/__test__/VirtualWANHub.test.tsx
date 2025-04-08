import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VirtualWANHub from "../VirtualWANHub";

describe("VirtualWANHub component", () => {
  it("VirtualWANHub should render correctly", () => {
    render(<VirtualWANHub />);
    expect(true).toBeTruthy();
  });
});

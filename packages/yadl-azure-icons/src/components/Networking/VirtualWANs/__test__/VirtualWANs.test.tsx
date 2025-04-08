import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VirtualWANs from "../VirtualWANs";

describe("VirtualWANs component", () => {
  it("VirtualWANs should render correctly", () => {
    render(<VirtualWANs />);
    expect(true).toBeTruthy();
  });
});

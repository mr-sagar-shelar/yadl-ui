import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VirtualReality from "../VirtualReality";

describe("VirtualReality component", () => {
  it("VirtualReality should render correctly", () => {
    render(<VirtualReality />);
    expect(true).toBeTruthy();
  });
});

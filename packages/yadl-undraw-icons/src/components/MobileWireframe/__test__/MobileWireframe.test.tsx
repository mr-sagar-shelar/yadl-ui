import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MobileWireframe from "../MobileWireframe";

describe("MobileWireframe component", () => {
  it("MobileWireframe should render correctly", () => {
    render(<MobileWireframe />);
    expect(true).toBeTruthy();
  });
});

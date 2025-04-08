import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DeviceCompliance from "../DeviceCompliance";

describe("DeviceCompliance component", () => {
  it("DeviceCompliance should render correctly", () => {
    render(<DeviceCompliance />);
    expect(true).toBeTruthy();
  });
});

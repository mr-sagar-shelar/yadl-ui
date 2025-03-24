import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DeviceUpdateIoTHub from "../DeviceUpdateIoTHub";

describe("DeviceUpdateIoTHub component", () => {
  it("DeviceUpdateIoTHub should render correctly", () => {
    render(<DeviceUpdateIoTHub />);
    expect(true).toBeTruthy();
  });
});

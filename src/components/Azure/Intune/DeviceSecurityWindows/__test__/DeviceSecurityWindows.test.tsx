import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DeviceSecurityWindows from "../DeviceSecurityWindows";

describe("DeviceSecurityWindows component", () => {
  it("DeviceSecurityWindows should render correctly", () => {
    render(<DeviceSecurityWindows />);
    expect(true).toBeTruthy();
  });
});

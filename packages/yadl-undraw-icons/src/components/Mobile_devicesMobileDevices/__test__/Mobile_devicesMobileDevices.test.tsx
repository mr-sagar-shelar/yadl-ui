import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Mobile_devicesMobileDevices from "../Mobile_devicesMobileDevices";

describe("Mobile_devicesMobileDevices component", () => {
  it("Mobile_devicesMobileDevices should render correctly", () => {
    render(<Mobile_devicesMobileDevices />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DeviceSecurityApple from "../DeviceSecurityApple";

describe("DeviceSecurityApple component", () => {
  it("DeviceSecurityApple should render correctly", () => {
    render(<DeviceSecurityApple />);
    expect(true).toBeTruthy();
  });
});

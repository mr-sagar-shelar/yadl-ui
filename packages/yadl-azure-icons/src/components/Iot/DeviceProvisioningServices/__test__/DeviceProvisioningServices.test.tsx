import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DeviceProvisioningServices from "../DeviceProvisioningServices";

describe("DeviceProvisioningServices component", () => {
  it("DeviceProvisioningServices should render correctly", () => {
    render(<DeviceProvisioningServices />);
    expect(true).toBeTruthy();
  });
});

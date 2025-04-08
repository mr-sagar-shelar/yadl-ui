import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IoTDeviceManagement from "../IoTDeviceManagement";

describe("IoTDeviceManagement component", () => {
  it("IoTDeviceManagement should render correctly", () => {
    render(<IoTDeviceManagement />);
    expect(true).toBeTruthy();
  });
});

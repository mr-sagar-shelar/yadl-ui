import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IoTDeviceDefender from "../IoTDeviceDefender";

describe("IoTDeviceDefender component", () => {
  it("IoTDeviceDefender should render correctly", () => {
    render(<IoTDeviceDefender />);
    expect(true).toBeTruthy();
  });
});

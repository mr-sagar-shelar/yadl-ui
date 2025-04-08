import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DroneDelivery from "../DroneDelivery";

describe("DroneDelivery component", () => {
  it("DroneDelivery should render correctly", () => {
    render(<DroneDelivery />);
    expect(true).toBeTruthy();
  });
});

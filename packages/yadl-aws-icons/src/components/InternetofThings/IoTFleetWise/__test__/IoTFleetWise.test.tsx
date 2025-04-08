import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IoTFleetWise from "../IoTFleetWise";

describe("IoTFleetWise component", () => {
  it("IoTFleetWise should render correctly", () => {
    render(<IoTFleetWise />);
    expect(true).toBeTruthy();
  });
});

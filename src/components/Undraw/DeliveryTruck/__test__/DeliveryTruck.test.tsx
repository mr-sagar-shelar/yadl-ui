import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DeliveryTruck from "../DeliveryTruck";

describe("DeliveryTruck component", () => {
  it("DeliveryTruck should render correctly", () => {
    render(<DeliveryTruck />);
    expect(true).toBeTruthy();
  });
});

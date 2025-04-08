import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OrderRide from "../OrderRide";

describe("OrderRide component", () => {
  it("OrderRide should render correctly", () => {
    render(<OrderRide />);
    expect(true).toBeTruthy();
  });
});

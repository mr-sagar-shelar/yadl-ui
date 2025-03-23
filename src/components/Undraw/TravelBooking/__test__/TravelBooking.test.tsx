import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TravelBooking from "../TravelBooking";

describe("TravelBooking component", () => {
  it("TravelBooking should render correctly", () => {
    render(<TravelBooking />);
    expect(true).toBeTruthy();
  });
});

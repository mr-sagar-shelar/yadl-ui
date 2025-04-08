import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Booking from "../Booking";

describe("Booking component", () => {
  it("Booking should render correctly", () => {
    render(<Booking />);
    expect(true).toBeTruthy();
  });
});

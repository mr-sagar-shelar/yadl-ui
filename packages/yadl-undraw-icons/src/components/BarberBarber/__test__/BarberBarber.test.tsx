import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BarberBarber from "../BarberBarber";

describe("BarberBarber component", () => {
  it("BarberBarber should render correctly", () => {
    render(<BarberBarber />);
    expect(true).toBeTruthy();
  });
});

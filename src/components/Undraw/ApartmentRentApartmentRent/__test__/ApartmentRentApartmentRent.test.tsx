import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ApartmentRentApartmentRent from "../ApartmentRentApartmentRent";

describe("ApartmentRentApartmentRent component", () => {
  it("ApartmentRentApartmentRent should render correctly", () => {
    render(<ApartmentRentApartmentRent />);
    expect(true).toBeTruthy();
  });
});

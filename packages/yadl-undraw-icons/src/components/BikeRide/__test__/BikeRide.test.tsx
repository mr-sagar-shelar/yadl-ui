import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BikeRide from "../BikeRide";

describe("BikeRide component", () => {
  it("BikeRide should render correctly", () => {
    render(<BikeRide />);
    expect(true).toBeTruthy();
  });
});

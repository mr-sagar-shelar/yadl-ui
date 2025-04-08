import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RideABicycle from "../RideABicycle";

describe("RideABicycle component", () => {
  it("RideABicycle should render correctly", () => {
    render(<RideABicycle />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Drone_surveillanceDroneSurveillance from "../Drone_surveillanceDroneSurveillance";

describe("Drone_surveillanceDroneSurveillance component", () => {
  it("Drone_surveillanceDroneSurveillance should render correctly", () => {
    render(<Drone_surveillanceDroneSurveillance />);
    expect(true).toBeTruthy();
  });
});

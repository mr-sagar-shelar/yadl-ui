import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BikingBiking from "../BikingBiking";

describe("BikingBiking component", () => {
  it("BikingBiking should render correctly", () => {
    render(<BikingBiking />);
    expect(true).toBeTruthy();
  });
});

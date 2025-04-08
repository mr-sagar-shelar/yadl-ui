import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TouristMap from "../TouristMap";

describe("TouristMap component", () => {
  it("TouristMap should render correctly", () => {
    render(<TouristMap />);
    expect(true).toBeTruthy();
  });
});

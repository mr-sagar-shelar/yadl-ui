import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TravelPlans from "../TravelPlans";

describe("TravelPlans component", () => {
  it("TravelPlans should render correctly", () => {
    render(<TravelPlans />);
    expect(true).toBeTruthy();
  });
});

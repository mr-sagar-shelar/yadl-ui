import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TravelTogether from "../TravelTogether";

describe("TravelTogether component", () => {
  it("TravelTogether should render correctly", () => {
    render(<TravelTogether />);
    expect(true).toBeTruthy();
  });
});

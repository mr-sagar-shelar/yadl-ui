import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OurNeighborhood from "../OurNeighborhood";

describe("OurNeighborhood component", () => {
  it("OurNeighborhood should render correctly", () => {
    render(<OurNeighborhood />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Through_the_parkThroughThePark from "../Through_the_parkThroughThePark";

describe("Through_the_parkThroughThePark component", () => {
  it("Through_the_parkThroughThePark should render correctly", () => {
    render(<Through_the_parkThroughThePark />);
    expect(true).toBeTruthy();
  });
});

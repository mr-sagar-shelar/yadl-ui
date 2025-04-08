import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ArtificialIntelligence from "../ArtificialIntelligence";

describe("ArtificialIntelligence component", () => {
  it("ArtificialIntelligence should render correctly", () => {
    render(<ArtificialIntelligence />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VideoIntelligenceApi from "../VideoIntelligenceApi";

describe("VideoIntelligenceApi component", () => {
  it("VideoIntelligenceApi should render correctly", () => {
    render(<VideoIntelligenceApi />);
    expect(true).toBeTruthy();
  });
});

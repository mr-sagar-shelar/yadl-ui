import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AutomlVideoIntelligence from "../AutomlVideoIntelligence";

describe("AutomlVideoIntelligence component", () => {
  it("AutomlVideoIntelligence should render correctly", () => {
    render(<AutomlVideoIntelligence />);
    expect(true).toBeTruthy();
  });
});

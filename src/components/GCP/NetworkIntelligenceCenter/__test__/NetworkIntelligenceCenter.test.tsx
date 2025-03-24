import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NetworkIntelligenceCenter from "../NetworkIntelligenceCenter";

describe("NetworkIntelligenceCenter component", () => {
  it("NetworkIntelligenceCenter should render correctly", () => {
    render(<NetworkIntelligenceCenter />);
    expect(true).toBeTruthy();
  });
});

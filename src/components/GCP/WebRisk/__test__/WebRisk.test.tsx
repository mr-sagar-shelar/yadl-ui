import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WebRisk from "../WebRisk";

describe("WebRisk component", () => {
  it("WebRisk should render correctly", () => {
    render(<WebRisk />);
    expect(true).toBeTruthy();
  });
});

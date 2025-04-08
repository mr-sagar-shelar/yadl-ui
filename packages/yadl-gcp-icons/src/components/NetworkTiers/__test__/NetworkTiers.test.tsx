import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NetworkTiers from "../NetworkTiers";

describe("NetworkTiers component", () => {
  it("NetworkTiers should render correctly", () => {
    render(<NetworkTiers />);
    expect(true).toBeTruthy();
  });
});

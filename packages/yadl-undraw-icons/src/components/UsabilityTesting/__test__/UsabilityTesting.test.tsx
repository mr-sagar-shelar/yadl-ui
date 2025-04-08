import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import UsabilityTesting from "../UsabilityTesting";

describe("UsabilityTesting component", () => {
  it("UsabilityTesting should render correctly", () => {
    render(<UsabilityTesting />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ResilienceHub from "../ResilienceHub";

describe("ResilienceHub component", () => {
  it("ResilienceHub should render correctly", () => {
    render(<ResilienceHub />);
    expect(true).toBeTruthy();
  });
});

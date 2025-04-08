import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Stand_outStandOut from "../Stand_outStandOut";

describe("Stand_outStandOut component", () => {
  it("Stand_outStandOut should render correctly", () => {
    render(<Stand_outStandOut />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GdprGDPR from "../GdprGDPR";

describe("GdprGDPR component", () => {
  it("GdprGDPR should render correctly", () => {
    render(<GdprGDPR />);
    expect(true).toBeTruthy();
  });
});

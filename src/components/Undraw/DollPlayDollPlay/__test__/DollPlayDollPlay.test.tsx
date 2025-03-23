import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DollPlayDollPlay from "../DollPlayDollPlay";

describe("DollPlayDollPlay component", () => {
  it("DollPlayDollPlay should render correctly", () => {
    render(<DollPlayDollPlay />);
    expect(true).toBeTruthy();
  });
});

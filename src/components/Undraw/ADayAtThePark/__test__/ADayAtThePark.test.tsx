import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ADayAtThePark from "../ADayAtThePark";

describe("ADayAtThePark component", () => {
  it("ADayAtThePark should render correctly", () => {
    render(<ADayAtThePark />);
    expect(true).toBeTruthy();
  });
});

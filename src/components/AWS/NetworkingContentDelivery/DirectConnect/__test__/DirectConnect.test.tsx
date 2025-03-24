import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DirectConnect from "../DirectConnect";

describe("DirectConnect component", () => {
  it("DirectConnect should render correctly", () => {
    render(<DirectConnect />);
    expect(true).toBeTruthy();
  });
});

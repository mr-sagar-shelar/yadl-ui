import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DevProductivity from "../DevProductivity";

describe("DevProductivity component", () => {
  it("DevProductivity should render correctly", () => {
    render(<DevProductivity />);
    expect(true).toBeTruthy();
  });
});

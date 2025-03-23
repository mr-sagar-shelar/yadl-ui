import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Popular from "../Popular";

describe("Popular component", () => {
  it("Popular should render correctly", () => {
    render(<Popular />);
    expect(true).toBeTruthy();
  });
});

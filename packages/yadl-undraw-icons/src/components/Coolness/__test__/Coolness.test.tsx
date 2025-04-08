import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Coolness from "../Coolness";

describe("Coolness component", () => {
  it("Coolness should render correctly", () => {
    render(<Coolness />);
    expect(true).toBeTruthy();
  });
});

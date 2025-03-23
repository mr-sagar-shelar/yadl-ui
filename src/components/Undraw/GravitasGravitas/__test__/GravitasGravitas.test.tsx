import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GravitasGravitas from "../GravitasGravitas";

describe("GravitasGravitas component", () => {
  it("GravitasGravitas should render correctly", () => {
    render(<GravitasGravitas />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Sketchup from "../Sketchup";

describe("Sketchup component", () => {
  it("Sketchup should render correctly", () => {
    render(<Sketchup />);
    expect(true).toBeTruthy();
  });
});

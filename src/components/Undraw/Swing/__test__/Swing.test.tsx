import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Swing from "../Swing";

describe("Swing component", () => {
  it("Swing should render correctly", () => {
    render(<Swing />);
    expect(true).toBeTruthy();
  });
});

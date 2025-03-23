import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Balloons from "../Balloons";

describe("Balloons component", () => {
  it("Balloons should render correctly", () => {
    render(<Balloons />);
    expect(true).toBeTruthy();
  });
});

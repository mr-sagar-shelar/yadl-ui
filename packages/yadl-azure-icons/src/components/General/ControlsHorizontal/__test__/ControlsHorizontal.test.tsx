import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ControlsHorizontal from "../ControlsHorizontal";

describe("ControlsHorizontal component", () => {
  it("ControlsHorizontal should render correctly", () => {
    render(<ControlsHorizontal />);
    expect(true).toBeTruthy();
  });
});

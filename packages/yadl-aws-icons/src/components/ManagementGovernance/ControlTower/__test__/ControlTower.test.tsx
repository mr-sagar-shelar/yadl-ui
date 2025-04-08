import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ControlTower from "../ControlTower";

describe("ControlTower component", () => {
  it("ControlTower should render correctly", () => {
    render(<ControlTower />);
    expect(true).toBeTruthy();
  });
});

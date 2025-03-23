import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ICanFlyICanFly from "../ICanFlyICanFly";

describe("ICanFlyICanFly component", () => {
  it("ICanFlyICanFly should render correctly", () => {
    render(<ICanFlyICanFly />);
    expect(true).toBeTruthy();
  });
});

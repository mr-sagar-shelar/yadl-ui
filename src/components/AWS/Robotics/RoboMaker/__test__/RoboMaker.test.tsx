import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RoboMaker from "../RoboMaker";

describe("RoboMaker component", () => {
  it("RoboMaker should render correctly", () => {
    render(<RoboMaker />);
    expect(true).toBeTruthy();
  });
});

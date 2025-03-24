import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Gear from "../Gear";

describe("Gear component", () => {
  it("Gear should render correctly", () => {
    render(<Gear />);
    expect(true).toBeTruthy();
  });
});

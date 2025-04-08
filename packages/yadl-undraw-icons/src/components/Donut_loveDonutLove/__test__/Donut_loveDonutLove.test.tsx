import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Donut_loveDonutLove from "../Donut_loveDonutLove";

describe("Donut_loveDonutLove component", () => {
  it("Donut_loveDonutLove should render correctly", () => {
    render(<Donut_loveDonutLove />);
    expect(true).toBeTruthy();
  });
});

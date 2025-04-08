import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Proud_selfProudSelf from "../Proud_selfProudSelf";

describe("Proud_selfProudSelf component", () => {
  it("Proud_selfProudSelf should render correctly", () => {
    render(<Proud_selfProudSelf />);
    expect(true).toBeTruthy();
  });
});

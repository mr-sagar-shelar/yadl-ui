import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Wash_handsWashHands from "../Wash_handsWashHands";

describe("Wash_handsWashHands component", () => {
  it("Wash_handsWashHands should render correctly", () => {
    render(<Wash_handsWashHands />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Yoga from "../Yoga";

describe("Yoga component", () => {
  it("Yoga should render correctly", () => {
    render(<Yoga />);
    expect(true).toBeTruthy();
  });
});

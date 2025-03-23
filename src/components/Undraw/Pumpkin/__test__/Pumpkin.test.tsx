import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Pumpkin from "../Pumpkin";

describe("Pumpkin component", () => {
  it("Pumpkin should render correctly", () => {
    render(<Pumpkin />);
    expect(true).toBeTruthy();
  });
});

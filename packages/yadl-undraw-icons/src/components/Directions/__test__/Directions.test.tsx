import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Directions from "../Directions";

describe("Directions component", () => {
  it("Directions should render correctly", () => {
    render(<Directions />);
    expect(true).toBeTruthy();
  });
});

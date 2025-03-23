import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Polaroid from "../Polaroid";

describe("Polaroid component", () => {
  it("Polaroid should render correctly", () => {
    render(<Polaroid />);
    expect(true).toBeTruthy();
  });
});

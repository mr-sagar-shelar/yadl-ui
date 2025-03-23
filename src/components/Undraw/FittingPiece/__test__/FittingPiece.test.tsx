import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FittingPiece from "../FittingPiece";

describe("FittingPiece component", () => {
  it("FittingPiece should render correctly", () => {
    render(<FittingPiece />);
    expect(true).toBeTruthy();
  });
});

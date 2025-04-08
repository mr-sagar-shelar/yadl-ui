import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FittingPieces from "../FittingPieces";

describe("FittingPieces component", () => {
  it("FittingPieces should render correctly", () => {
    render(<FittingPieces />);
    expect(true).toBeTruthy();
  });
});

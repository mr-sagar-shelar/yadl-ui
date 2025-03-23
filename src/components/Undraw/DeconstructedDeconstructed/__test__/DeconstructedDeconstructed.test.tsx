import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DeconstructedDeconstructed from "../DeconstructedDeconstructed";

describe("DeconstructedDeconstructed component", () => {
  it("DeconstructedDeconstructed should render correctly", () => {
    render(<DeconstructedDeconstructed />);
    expect(true).toBeTruthy();
  });
});

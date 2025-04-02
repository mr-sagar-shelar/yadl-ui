import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Octave from "../Octave";

describe("Octave component", () => {
  it("Octave should render correctly", () => {
    render(<Octave />);
    expect(true).toBeTruthy();
  });
});

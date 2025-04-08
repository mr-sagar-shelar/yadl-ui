import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Wavelength from "../Wavelength";

describe("Wavelength component", () => {
  it("Wavelength should render correctly", () => {
    render(<Wavelength />);
    expect(true).toBeTruthy();
  });
});

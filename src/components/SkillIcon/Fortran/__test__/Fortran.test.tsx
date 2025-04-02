import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Fortran from "../Fortran";

describe("Fortran component", () => {
  it("Fortran should render correctly", () => {
    render(<Fortran />);
    expect(true).toBeTruthy();
  });
});

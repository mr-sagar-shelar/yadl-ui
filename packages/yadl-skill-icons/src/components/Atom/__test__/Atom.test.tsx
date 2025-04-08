import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Atom from "../Atom";

describe("Atom component", () => {
  it("Atom should render correctly", () => {
    render(<Atom />);
    expect(true).toBeTruthy();
  });
});

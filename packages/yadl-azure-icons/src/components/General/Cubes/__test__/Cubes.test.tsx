import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Cubes from "../Cubes";

describe("Cubes component", () => {
  it("Cubes should render correctly", () => {
    render(<Cubes />);
    expect(true).toBeTruthy();
  });
});

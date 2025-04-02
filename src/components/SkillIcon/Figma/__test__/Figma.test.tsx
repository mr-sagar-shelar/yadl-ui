import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Figma from "../Figma";

describe("Figma component", () => {
  it("Figma should render correctly", () => {
    render(<Figma />);
    expect(true).toBeTruthy();
  });
});

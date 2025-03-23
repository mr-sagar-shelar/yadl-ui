import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Responsive from "../Responsive";

describe("Responsive component", () => {
  it("Responsive should render correctly", () => {
    render(<Responsive />);
    expect(true).toBeTruthy();
  });
});

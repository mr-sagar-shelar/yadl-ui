import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Experts from "../Experts";

describe("Experts component", () => {
  it("Experts should render correctly", () => {
    render(<Experts />);
    expect(true).toBeTruthy();
  });
});

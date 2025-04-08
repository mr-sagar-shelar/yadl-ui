import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Couple from "../Couple";

describe("Couple component", () => {
  it("Couple should render correctly", () => {
    render(<Couple />);
    expect(true).toBeTruthy();
  });
});

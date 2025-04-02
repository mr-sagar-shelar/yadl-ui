import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Pkl from "../Pkl";

describe("Pkl component", () => {
  it("Pkl should render correctly", () => {
    render(<Pkl />);
    expect(true).toBeTruthy();
  });
});

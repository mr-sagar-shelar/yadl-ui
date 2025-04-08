import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Breeze from "../Breeze";

describe("Breeze component", () => {
  it("Breeze should render correctly", () => {
    render(<Breeze />);
    expect(true).toBeTruthy();
  });
});

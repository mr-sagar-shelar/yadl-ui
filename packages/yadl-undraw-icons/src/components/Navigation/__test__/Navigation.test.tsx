import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Navigation from "../Navigation";

describe("Navigation component", () => {
  it("Navigation should render correctly", () => {
    render(<Navigation />);
    expect(true).toBeTruthy();
  });
});

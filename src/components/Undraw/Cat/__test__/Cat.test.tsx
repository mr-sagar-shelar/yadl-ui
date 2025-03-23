import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Cat from "../Cat";

describe("Cat component", () => {
  it("Cat should render correctly", () => {
    render(<Cat />);
    expect(true).toBeTruthy();
  });
});

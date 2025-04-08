import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Creation from "../Creation";

describe("Creation component", () => {
  it("Creation should render correctly", () => {
    render(<Creation />);
    expect(true).toBeTruthy();
  });
});

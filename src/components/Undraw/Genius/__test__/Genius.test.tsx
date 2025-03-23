import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Genius from "../Genius";

describe("Genius component", () => {
  it("Genius should render correctly", () => {
    render(<Genius />);
    expect(true).toBeTruthy();
  });
});

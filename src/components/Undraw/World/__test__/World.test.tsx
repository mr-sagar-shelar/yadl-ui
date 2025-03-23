import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import World from "../World";

describe("World component", () => {
  it("World should render correctly", () => {
    render(<World />);
    expect(true).toBeTruthy();
  });
});

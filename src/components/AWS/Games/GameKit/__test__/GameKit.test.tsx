import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GameKit from "../GameKit";

describe("GameKit component", () => {
  it("GameKit should render correctly", () => {
    render(<GameKit />);
    expect(true).toBeTruthy();
  });
});

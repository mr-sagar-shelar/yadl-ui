import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Obsidian from "../Obsidian";

describe("Obsidian component", () => {
  it("Obsidian should render correctly", () => {
    render(<Obsidian />);
    expect(true).toBeTruthy();
  });
});

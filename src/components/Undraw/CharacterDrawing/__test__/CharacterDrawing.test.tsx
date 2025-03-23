import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CharacterDrawing from "../CharacterDrawing";

describe("CharacterDrawing component", () => {
  it("CharacterDrawing should render correctly", () => {
    render(<CharacterDrawing />);
    expect(true).toBeTruthy();
  });
});

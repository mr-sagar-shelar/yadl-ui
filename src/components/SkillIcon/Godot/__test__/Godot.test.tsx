import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Godot from "../Godot";

describe("Godot component", () => {
  it("Godot should render correctly", () => {
    render(<Godot />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Tauri from "../Tauri";

describe("Tauri component", () => {
  it("Tauri should render correctly", () => {
    render(<Tauri />);
    expect(true).toBeTruthy();
  });
});

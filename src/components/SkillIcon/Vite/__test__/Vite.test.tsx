import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Vite from "../Vite";

describe("Vite component", () => {
  it("Vite should render correctly", () => {
    render(<Vite />);
    expect(true).toBeTruthy();
  });
});

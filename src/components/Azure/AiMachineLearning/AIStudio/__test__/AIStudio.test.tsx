import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AIStudio from "../AIStudio";

describe("AIStudio component", () => {
  it("AIStudio should render correctly", () => {
    render(<AIStudio />);
    expect(true).toBeTruthy();
  });
});

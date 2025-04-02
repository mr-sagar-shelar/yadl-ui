import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Zig from "../Zig";

describe("Zig component", () => {
  it("Zig should render correctly", () => {
    render(<Zig />);
    expect(true).toBeTruthy();
  });
});

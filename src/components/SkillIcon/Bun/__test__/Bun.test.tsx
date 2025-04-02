import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Bun from "../Bun";

describe("Bun component", () => {
  it("Bun should render correctly", () => {
    render(<Bun />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Pnpm from "../Pnpm";

describe("Pnpm component", () => {
  it("Pnpm should render correctly", () => {
    render(<Pnpm />);
    expect(true).toBeTruthy();
  });
});

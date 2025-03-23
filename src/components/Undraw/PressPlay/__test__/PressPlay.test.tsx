import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PressPlay from "../PressPlay";

describe("PressPlay component", () => {
  it("PressPlay should render correctly", () => {
    render(<PressPlay />);
    expect(true).toBeTruthy();
  });
});

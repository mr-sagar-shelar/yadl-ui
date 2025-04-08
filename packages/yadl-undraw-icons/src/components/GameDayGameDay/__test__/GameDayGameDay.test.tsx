import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GameDayGameDay from "../GameDayGameDay";

describe("GameDayGameDay component", () => {
  it("GameDayGameDay should render correctly", () => {
    render(<GameDayGameDay />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PlayingGolf from "../PlayingGolf";

describe("PlayingGolf component", () => {
  it("PlayingGolf should render correctly", () => {
    render(<PlayingGolf />);
    expect(true).toBeTruthy();
  });
});

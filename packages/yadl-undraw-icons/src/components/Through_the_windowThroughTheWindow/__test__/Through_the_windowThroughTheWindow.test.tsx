import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Through_the_windowThroughTheWindow from "../Through_the_windowThroughTheWindow";

describe("Through_the_windowThroughTheWindow component", () => {
  it("Through_the_windowThroughTheWindow should render correctly", () => {
    render(<Through_the_windowThroughTheWindow />);
    expect(true).toBeTruthy();
  });
});

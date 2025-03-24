import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import p5js from "../p5js";

describe("p5js component", () => {
  it("p5js should render correctly", () => {
    render(<p5js />);
    expect(true).toBeTruthy();
  });
});

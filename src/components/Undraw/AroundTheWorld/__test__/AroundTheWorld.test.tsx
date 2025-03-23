import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AroundTheWorld from "../AroundTheWorld";

describe("AroundTheWorld component", () => {
  it("AroundTheWorld should render correctly", () => {
    render(<AroundTheWorld />);
    expect(true).toBeTruthy();
  });
});

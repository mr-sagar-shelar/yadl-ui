import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Drag from "../Drag";

describe("Drag component", () => {
  it("Drag should render correctly", () => {
    render(<Drag />);
    expect(true).toBeTruthy();
  });
});

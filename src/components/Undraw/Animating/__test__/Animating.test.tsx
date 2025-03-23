import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Animating from "../Animating";

describe("Animating component", () => {
  it("Animating should render correctly", () => {
    render(<Animating />);
    expect(true).toBeTruthy();
  });
});

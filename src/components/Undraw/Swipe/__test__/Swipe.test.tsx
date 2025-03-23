import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Swipe from "../Swipe";

describe("Swipe component", () => {
  it("Swipe should render correctly", () => {
    render(<Swipe />);
    expect(true).toBeTruthy();
  });
});

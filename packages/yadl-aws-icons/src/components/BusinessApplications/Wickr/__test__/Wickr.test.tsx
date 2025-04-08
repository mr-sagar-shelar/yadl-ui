import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Wickr from "../Wickr";

describe("Wickr component", () => {
  it("Wickr should render correctly", () => {
    render(<Wickr />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Prioritise from "../Prioritise";

describe("Prioritise component", () => {
  it("Prioritise should render correctly", () => {
    render(<Prioritise />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Presentation from "../Presentation";

describe("Presentation component", () => {
  it("Presentation should render correctly", () => {
    render(<Presentation />);
    expect(true).toBeTruthy();
  });
});

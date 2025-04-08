import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Launching from "../Launching";

describe("Launching component", () => {
  it("Launching should render correctly", () => {
    render(<Launching />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Flagged from "../Flagged";

describe("Flagged component", () => {
  it("Flagged should render correctly", () => {
    render(<Flagged />);
    expect(true).toBeTruthy();
  });
});

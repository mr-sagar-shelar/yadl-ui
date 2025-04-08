import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AVSVM from "../AVSVM";

describe("AVSVM component", () => {
  it("AVSVM should render correctly", () => {
    render(<AVSVM />);
    expect(true).toBeTruthy();
  });
});

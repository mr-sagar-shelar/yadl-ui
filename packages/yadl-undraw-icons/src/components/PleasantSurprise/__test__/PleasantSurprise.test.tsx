import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PleasantSurprise from "../PleasantSurprise";

describe("PleasantSurprise component", () => {
  it("PleasantSurprise should render correctly", () => {
    render(<PleasantSurprise />);
    expect(true).toBeTruthy();
  });
});

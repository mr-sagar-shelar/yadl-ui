import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VisualStudio from "../VisualStudio";

describe("VisualStudio component", () => {
  it("VisualStudio should render correctly", () => {
    render(<VisualStudio />);
    expect(true).toBeTruthy();
  });
});

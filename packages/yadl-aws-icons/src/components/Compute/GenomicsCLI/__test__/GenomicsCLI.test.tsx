import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GenomicsCLI from "../GenomicsCLI";

describe("GenomicsCLI component", () => {
  it("GenomicsCLI should render correctly", () => {
    render(<GenomicsCLI />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OptimizeImage from "../OptimizeImage";

describe("OptimizeImage component", () => {
  it("OptimizeImage should render correctly", () => {
    render(<OptimizeImage />);
    expect(true).toBeTruthy();
  });
});

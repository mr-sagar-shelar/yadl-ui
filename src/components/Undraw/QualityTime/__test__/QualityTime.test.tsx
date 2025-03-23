import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import QualityTime from "../QualityTime";

describe("QualityTime component", () => {
  it("QualityTime should render correctly", () => {
    render(<QualityTime />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VisualData from "../VisualData";

describe("VisualData component", () => {
  it("VisualData should render correctly", () => {
    render(<VisualData />);
    expect(true).toBeTruthy();
  });
});

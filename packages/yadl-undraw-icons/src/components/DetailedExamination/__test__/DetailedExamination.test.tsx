import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DetailedExamination from "../DetailedExamination";

describe("DetailedExamination component", () => {
  it("DetailedExamination should render correctly", () => {
    render(<DetailedExamination />);
    expect(true).toBeTruthy();
  });
});

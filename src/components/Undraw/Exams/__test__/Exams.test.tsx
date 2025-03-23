import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Exams from "../Exams";

describe("Exams component", () => {
  it("Exams should render correctly", () => {
    render(<Exams />);
    expect(true).toBeTruthy();
  });
});

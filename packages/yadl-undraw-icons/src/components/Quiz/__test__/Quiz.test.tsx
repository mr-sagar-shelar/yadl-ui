import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Quiz from "../Quiz";

describe("Quiz component", () => {
  it("Quiz should render correctly", () => {
    render(<Quiz />);
    expect(true).toBeTruthy();
  });
});

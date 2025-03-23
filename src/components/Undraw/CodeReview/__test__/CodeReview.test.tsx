import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CodeReview from "../CodeReview";

describe("CodeReview component", () => {
  it("CodeReview should render correctly", () => {
    render(<CodeReview />);
    expect(true).toBeTruthy();
  });
});

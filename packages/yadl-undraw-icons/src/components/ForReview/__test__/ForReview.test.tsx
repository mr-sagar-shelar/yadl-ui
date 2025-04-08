import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ForReview from "../ForReview";

describe("ForReview component", () => {
  it("ForReview should render correctly", () => {
    render(<ForReview />);
    expect(true).toBeTruthy();
  });
});

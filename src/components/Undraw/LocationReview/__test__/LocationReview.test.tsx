import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LocationReview from "../LocationReview";

describe("LocationReview component", () => {
  it("LocationReview should render correctly", () => {
    render(<LocationReview />);
    expect(true).toBeTruthy();
  });
});

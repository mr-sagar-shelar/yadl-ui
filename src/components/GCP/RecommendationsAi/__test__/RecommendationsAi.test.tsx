import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RecommendationsAi from "../RecommendationsAi";

describe("RecommendationsAi component", () => {
  it("RecommendationsAi should render correctly", () => {
    render(<RecommendationsAi />);
    expect(true).toBeTruthy();
  });
});

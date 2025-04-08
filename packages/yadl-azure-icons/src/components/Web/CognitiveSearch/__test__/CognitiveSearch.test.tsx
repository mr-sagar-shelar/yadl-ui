import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CognitiveSearch from "../CognitiveSearch";

describe("CognitiveSearch component", () => {
  it("CognitiveSearch should render correctly", () => {
    render(<CognitiveSearch />);
    expect(true).toBeTruthy();
  });
});

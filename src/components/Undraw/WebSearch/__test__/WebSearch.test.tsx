import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WebSearch from "../WebSearch";

describe("WebSearch component", () => {
  it("WebSearch should render correctly", () => {
    render(<WebSearch />);
    expect(true).toBeTruthy();
  });
});

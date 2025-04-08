import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Filter from "../Filter";

describe("Filter component", () => {
  it("Filter should render correctly", () => {
    render(<Filter />);
    expect(true).toBeTruthy();
  });
});

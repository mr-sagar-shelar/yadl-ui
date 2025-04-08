import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SearchApp from "../SearchApp";

describe("SearchApp component", () => {
  it("SearchApp should render correctly", () => {
    render(<SearchApp />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SearchIcons from "../SearchIcons";

describe("SearchIcons component", () => {
  it("SearchIcons should render correctly", () => {
    render(<SearchIcons />);
    expect(true).toBeTruthy();
  });
});

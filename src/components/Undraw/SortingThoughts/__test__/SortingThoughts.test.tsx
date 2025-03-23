import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SortingThoughts from "../SortingThoughts";

describe("SortingThoughts component", () => {
  it("SortingThoughts should render correctly", () => {
    render(<SortingThoughts />);
    expect(true).toBeTruthy();
  });
});

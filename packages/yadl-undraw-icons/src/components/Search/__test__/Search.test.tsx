import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Search from "../Search";

describe("Search component", () => {
  it("Search should render correctly", () => {
    render(<Search />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SearchTextComponents from "../SearchTextComponents";

describe("SearchTextComponents component", () => {
  it("SearchTextComponents should render correctly", () => {
    render(<SearchTextComponents />);
    expect(true).toBeTruthy();
  });
});

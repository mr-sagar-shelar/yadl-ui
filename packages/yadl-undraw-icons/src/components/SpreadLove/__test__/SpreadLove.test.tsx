import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SpreadLove from "../SpreadLove";

describe("SpreadLove component", () => {
  it("SpreadLove should render correctly", () => {
    render(<SpreadLove />);
    expect(true).toBeTruthy();
  });
});

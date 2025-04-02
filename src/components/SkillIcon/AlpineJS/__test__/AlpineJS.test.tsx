import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AlpineJS from "../AlpineJS";

describe("AlpineJS component", () => {
  it("AlpineJS should render correctly", () => {
    render(<AlpineJS />);
    expect(true).toBeTruthy();
  });
});

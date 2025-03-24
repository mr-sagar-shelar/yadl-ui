import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WindiCSS from "../WindiCSS";

describe("WindiCSS component", () => {
  it("WindiCSS should render correctly", () => {
    render(<WindiCSS />);
    expect(true).toBeTruthy();
  });
});

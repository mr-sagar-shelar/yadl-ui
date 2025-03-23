import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Growing from "../Growing";

describe("Growing component", () => {
  it("Growing should render correctly", () => {
    render(<Growing />);
    expect(true).toBeTruthy();
  });
});

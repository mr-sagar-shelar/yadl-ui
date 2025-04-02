import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Rails from "../Rails";

describe("Rails component", () => {
  it("Rails should render correctly", () => {
    render(<Rails />);
    expect(true).toBeTruthy();
  });
});

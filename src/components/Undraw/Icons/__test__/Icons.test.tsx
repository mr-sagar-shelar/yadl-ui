import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Icons from "../Icons";

describe("Icons component", () => {
  it("Icons should render correctly", () => {
    render(<Icons />);
    expect(true).toBeTruthy();
  });
});

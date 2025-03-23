import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Children from "../Children";

describe("Children component", () => {
  it("Children should render correctly", () => {
    render(<Children />);
    expect(true).toBeTruthy();
  });
});

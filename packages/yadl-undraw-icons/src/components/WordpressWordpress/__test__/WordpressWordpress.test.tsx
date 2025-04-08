import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WordpressWordpress from "../WordpressWordpress";

describe("WordpressWordpress component", () => {
  it("WordpressWordpress should render correctly", () => {
    render(<WordpressWordpress />);
    expect(true).toBeTruthy();
  });
});

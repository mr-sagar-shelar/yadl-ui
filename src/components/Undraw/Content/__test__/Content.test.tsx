import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Content from "../Content";

describe("Content component", () => {
  it("Content should render correctly", () => {
    render(<Content />);
    expect(true).toBeTruthy();
  });
});

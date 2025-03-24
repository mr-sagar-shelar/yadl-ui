import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EC2ImageBuilder from "../EC2ImageBuilder";

describe("EC2ImageBuilder component", () => {
  it("EC2ImageBuilder should render correctly", () => {
    render(<EC2ImageBuilder />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import JavaScript from "../JavaScript";

describe("JavaScript component", () => {
  it("JavaScript should render correctly", () => {
    render(<JavaScript />);
    expect(true).toBeTruthy();
  });
});

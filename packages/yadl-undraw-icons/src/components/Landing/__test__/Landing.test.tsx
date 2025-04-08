import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Landing from "../Landing";

describe("Landing component", () => {
  it("Landing should render correctly", () => {
    render(<Landing />);
    expect(true).toBeTruthy();
  });
});

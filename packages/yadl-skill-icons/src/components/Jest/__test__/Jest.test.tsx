import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Jest from "../Jest";

describe("Jest component", () => {
  it("Jest should render correctly", () => {
    render(<Jest />);
    expect(true).toBeTruthy();
  });
});

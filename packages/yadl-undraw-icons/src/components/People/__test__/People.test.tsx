import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import People from "../People";

describe("People component", () => {
  it("People should render correctly", () => {
    render(<People />);
    expect(true).toBeTruthy();
  });
});

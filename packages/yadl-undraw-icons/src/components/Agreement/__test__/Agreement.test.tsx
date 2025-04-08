import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Agreement from "../Agreement";

describe("Agreement component", () => {
  it("Agreement should render correctly", () => {
    render(<Agreement />);
    expect(true).toBeTruthy();
  });
});

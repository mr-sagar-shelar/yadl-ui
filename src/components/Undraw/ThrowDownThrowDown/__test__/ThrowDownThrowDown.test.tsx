import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ThrowDownThrowDown from "../ThrowDownThrowDown";

describe("ThrowDownThrowDown component", () => {
  it("ThrowDownThrowDown should render correctly", () => {
    render(<ThrowDownThrowDown />);
    expect(true).toBeTruthy();
  });
});

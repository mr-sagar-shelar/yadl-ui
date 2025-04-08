import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WaitInLine from "../WaitInLine";

describe("WaitInLine component", () => {
  it("WaitInLine should render correctly", () => {
    render(<WaitInLine />);
    expect(true).toBeTruthy();
  });
});

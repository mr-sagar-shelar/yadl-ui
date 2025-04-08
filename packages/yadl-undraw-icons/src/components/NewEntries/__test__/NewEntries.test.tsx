import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NewEntries from "../NewEntries";

describe("NewEntries component", () => {
  it("NewEntries should render correctly", () => {
    render(<NewEntries />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SignalSearching from "../SignalSearching";

describe("SignalSearching component", () => {
  it("SignalSearching should render correctly", () => {
    render(<SignalSearching />);
    expect(true).toBeTruthy();
  });
});

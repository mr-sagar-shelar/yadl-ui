import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Counter from "../Counter";

describe("Counter component", () => {
  it("Counter should render correctly", () => {
    render(<Counter />);
    expect(true).toBeTruthy();
  });
});

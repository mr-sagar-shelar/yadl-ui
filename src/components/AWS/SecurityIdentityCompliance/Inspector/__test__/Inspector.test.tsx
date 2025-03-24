import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Inspector from "../Inspector";

describe("Inspector component", () => {
  it("Inspector should render correctly", () => {
    render(<Inspector />);
    expect(true).toBeTruthy();
  });
});

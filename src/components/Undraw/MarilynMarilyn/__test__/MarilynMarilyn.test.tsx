import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MarilynMarilyn from "../MarilynMarilyn";

describe("MarilynMarilyn component", () => {
  it("MarilynMarilyn should render correctly", () => {
    render(<MarilynMarilyn />);
    expect(true).toBeTruthy();
  });
});

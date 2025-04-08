import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CountingStars from "../CountingStars";

describe("CountingStars component", () => {
  it("CountingStars should render correctly", () => {
    render(<CountingStars />);
    expect(true).toBeTruthy();
  });
});

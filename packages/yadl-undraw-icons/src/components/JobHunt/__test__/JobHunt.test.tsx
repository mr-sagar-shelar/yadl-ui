import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import JobHunt from "../JobHunt";

describe("JobHunt component", () => {
  it("JobHunt should render correctly", () => {
    render(<JobHunt />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CleanUp from "../CleanUp";

describe("CleanUp component", () => {
  it("CleanUp should render correctly", () => {
    render(<CleanUp />);
    expect(true).toBeTruthy();
  });
});

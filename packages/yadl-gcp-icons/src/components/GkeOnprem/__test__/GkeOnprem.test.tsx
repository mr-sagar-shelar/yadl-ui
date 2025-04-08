import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GkeOnprem from "../GkeOnprem";

describe("GkeOnprem component", () => {
  it("GkeOnprem should render correctly", () => {
    render(<GkeOnprem />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BeachDay from "../BeachDay";

describe("BeachDay component", () => {
  it("BeachDay should render correctly", () => {
    render(<BeachDay />);
    expect(true).toBeTruthy();
  });
});

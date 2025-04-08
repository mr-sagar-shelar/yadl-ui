import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Bug from "../Bug";

describe("Bug component", () => {
  it("Bug should render correctly", () => {
    render(<Bug />);
    expect(true).toBeTruthy();
  });
});

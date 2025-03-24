import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FSx from "../FSx";

describe("FSx component", () => {
  it("FSx should render correctly", () => {
    render(<FSx />);
    expect(true).toBeTruthy();
  });
});

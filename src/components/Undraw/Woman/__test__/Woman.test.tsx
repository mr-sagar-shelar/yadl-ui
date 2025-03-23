import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Woman from "../Woman";

describe("Woman component", () => {
  it("Woman should render correctly", () => {
    render(<Woman />);
    expect(true).toBeTruthy();
  });
});

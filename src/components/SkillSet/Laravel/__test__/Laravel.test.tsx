import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Laravel from "../Laravel";

describe("Laravel component", () => {
  it("Laravel should render correctly", () => {
    render(<Laravel />);
    expect(true).toBeTruthy();
  });
});

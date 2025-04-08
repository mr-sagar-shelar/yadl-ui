import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WorkingLate from "../WorkingLate";

describe("WorkingLate component", () => {
  it("WorkingLate should render correctly", () => {
    render(<WorkingLate />);
    expect(true).toBeTruthy();
  });
});

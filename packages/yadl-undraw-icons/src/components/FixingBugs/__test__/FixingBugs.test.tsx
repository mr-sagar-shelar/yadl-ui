import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FixingBugs from "../FixingBugs";

describe("FixingBugs component", () => {
  it("FixingBugs should render correctly", () => {
    render(<FixingBugs />);
    expect(true).toBeTruthy();
  });
});

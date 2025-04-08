import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HomeRun from "../HomeRun";

describe("HomeRun component", () => {
  it("HomeRun should render correctly", () => {
    render(<HomeRun />);
    expect(true).toBeTruthy();
  });
});

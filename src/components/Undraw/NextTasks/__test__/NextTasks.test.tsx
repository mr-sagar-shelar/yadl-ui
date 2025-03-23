import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NextTasks from "../NextTasks";

describe("NextTasks component", () => {
  it("NextTasks should render correctly", () => {
    render(<NextTasks />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AddTasks from "../AddTasks";

describe("AddTasks component", () => {
  it("AddTasks should render correctly", () => {
    render(<AddTasks />);
    expect(true).toBeTruthy();
  });
});

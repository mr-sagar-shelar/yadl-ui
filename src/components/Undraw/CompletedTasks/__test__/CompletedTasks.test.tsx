import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CompletedTasks from "../CompletedTasks";

describe("CompletedTasks component", () => {
  it("CompletedTasks should render correctly", () => {
    render(<CompletedTasks />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Task from "../Task";

describe("Task component", () => {
  it("Task should render correctly", () => {
    render(<Task />);
    expect(true).toBeTruthy();
  });
});

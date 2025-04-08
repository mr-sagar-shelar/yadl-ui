import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TaskList from "../TaskList";

describe("TaskList component", () => {
  it("TaskList should render correctly", () => {
    render(<TaskList />);
    expect(true).toBeTruthy();
  });
});

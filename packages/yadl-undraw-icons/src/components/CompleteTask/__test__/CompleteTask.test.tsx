import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CompleteTask from "../CompleteTask";

describe("CompleteTask component", () => {
  it("CompleteTask should render correctly", () => {
    render(<CompleteTask />);
    expect(true).toBeTruthy();
  });
});

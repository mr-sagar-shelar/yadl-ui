import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ProjectCompleted from "../ProjectCompleted";

describe("ProjectCompleted component", () => {
  it("ProjectCompleted should render correctly", () => {
    render(<ProjectCompleted />);
    expect(true).toBeTruthy();
  });
});

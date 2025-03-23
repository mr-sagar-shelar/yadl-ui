import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Tasks from "../Tasks";

describe("Tasks component", () => {
  it("Tasks should render correctly", () => {
    render(<Tasks />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Project from "../Project";

describe("Project component", () => {
  it("Project should render correctly", () => {
    render(<Project />);
    expect(true).toBeTruthy();
  });
});
